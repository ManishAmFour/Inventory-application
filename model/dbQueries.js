const pool = require("../database/connection");

const additionToDatabase = async (title, category, price, rating) => {
  let command = `
INSERT INTO games(title,price,rating,genre)
VALUES 
 (($1),($2),($3),($4));
`;

  await pool.query(command, [title, category, price, rating]);

  let command2 = `
INSERT INTO categories(genre,title)
VALUES 
(($1),($2));
`;

  await pool.query(command2, [category, title]);
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

module.exports = {
  additionToDatabase,
  fetchingTheDatabase,
  fetchingTheDatabaseForCategory,
};
