const pool = require("../database/connection");

async function scripting() {
  const command = `CREATE TABLE IF NOT EXISTS games (
    title VARCHAR (255),
    price VARCHAR (255),
    rating VARCHAR (255),
    genre VARCHAR (255)
);

CREATE TABLE IF NOT EXISTS categories (
    genre VARCHAR (255)
    
);

INSERT INTO games(title,price,rating,genre)
VALUES
    ('GTA 4','$40','4','action'),
    ('GTA 5','$45','3.5','action'),
    ('RDR2','$48','4.5','adventure'),
    ('FIFA 23','$50','4','sports'),
    ('The Witcher 3','$35','4.7','adventure'),
    ('Resident Evil Village','$42','4.2','horror'),
    ('Cyberpunk 2077','$55','3.9','action'),
    ('The Sims 4','$30','4.1','simulation'),
    ('Forza Horizon 5','$60','4.6','racing'),
    ('God of War','$50','4.8','action'),
    ('Assassins Creed Valhalla','$45','4.0','adventure'),
    ('NBA 2K24','$55','3.6','sports'),
    ('Outlast','$20','4.3','horror'),
    ('Cities: Skylines','$25','4.4','simulation'),
    ('Need for Speed Heat','$40','4.0','racing');



INSERT INTO categories(genre)
VALUES
    ('action'),
    ('adventure'),
    ('sports'),
    ('horror'),
    ('simulation'),
    ('racing');
`;
  await pool.query(command);
}

scripting();
