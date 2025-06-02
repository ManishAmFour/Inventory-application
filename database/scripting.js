const pool = require("../database/connection");

async function scripting() {
  const command = `CREATE TABLE IF NOT EXISTS games (
    title VARCHAR (255),
    price VARCHAR (255),
    rating VARCHAR (255),
    genre VARCHAR (255)
);

CREATE TABLE IF NOT EXISTS categories (
    genre VARCHAR (255),
    title VARCHAR (255)
);

INSERT INTO games(title,price,rating,genre)
VALUES
    ('GTA 4','$40','4','action'),
    ('GTA 5','$45','3.5','action'),
    ('RDR2','$48','4.5','adventure');

`;
  await pool.query(command);
}

scripting();
