const pool = require("../database/connection");

const additionToDatabase = async (title, category, price, rating) => {
  let command = `
INSERT INTO games(title,price,rating,genre)
VALUES 
 (($1),($2),($3),($4));
`;

  await pool.query(command, [title, price, rating, category]);
};

const deleteTheItems = async (valueIdentified) => {
  const genreCommand = `SELECT * FROM games WHERE title LIKE ($1)`;
  let { rows } = await pool.query(genreCommand, [valueIdentified]);
  let { genre } = rows[0];

  const command = `DELETE FROM games WHERE title LIKE ($1)`;
  await pool.query(command, [valueIdentified]);

  const checkCommand = `SELECT * FROM games WHERE genre LIKE ($1)`;
  const incomingRequest = await pool.query(checkCommand, [genre]);
  if (incomingRequest.rows.length === 0) {
    const command = `DELETE FROM categories WHERE genre LIKE ($1)`;
    await pool.query(command, [genre]);
  }
};

const deleteTheCategory = async (valueIdentified) => {
  const command = `DELETE FROM categories WHERE genre LIKE ($1)`;
  const command2 = `DELETE FROM games WHERE genre LIKE ($1)`;

  await pool.query(command, [valueIdentified]);
  await pool.query(command2, [valueIdentified]);
};

const fetchingTheDatabase = async () => {
  const command = `SELECT * FROM games`;
  const { rows } = await pool.query(command);
  return rows;
};

const fetchingTheDatabaseForCategory = async () => {
  const command = `SELECT * FROM categories`;
  const { rows } = await pool.query(command);
  return rows;
};

const additionOfCategory = async (category) => {
  let command = `
INSERT INTO categories(genre)
VALUES 
 (($1));
`;
  await pool.query(command, [category]);
};

module.exports = {
  additionToDatabase,
  fetchingTheDatabase,
  fetchingTheDatabaseForCategory,
  additionOfCategory,
  deleteTheItems,
  deleteTheCategory,
};
