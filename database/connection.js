const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "manish-tewatia",
  database: "inventory_application",
  password: "manishalka1234",
});

module.exports = pool;
