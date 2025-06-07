const pool = require("../database/connection");

const additionToDatabase = async (title, category, price, rating) => {
  let command = `
INSERT INTO games(title,price,rating,genre)
VALUES 
 (($1),($2),($3),($4));
`;

  await pool.query(command, [title, price, rating, category]);
};

const deleteTheItems = async () => {};

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
};
