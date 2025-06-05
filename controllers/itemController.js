const dbQueries = require("../model/dbQueries");

const itemController = async (req, res) => {
  let rows = await dbQueries.fetchingTheDatabase();

  res.render("items", { rows: rows });
};
module.exports = itemController;
