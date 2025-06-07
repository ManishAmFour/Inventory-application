const dbQueries = require("../model/dbQueries");

const categoryController = async (req, res) => {
  const rows = await dbQueries.fetchingTheDatabaseForCategory();

  res.render("categories", { rows: rows });
};
module.exports = categoryController;
