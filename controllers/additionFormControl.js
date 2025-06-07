const dbQueries = require("../model/dbQueries");

const additionFormControl = async (req, res) => {
  const rows = await dbQueries.fetchingTheDatabaseForCategory();

  res.render("add", { rows: rows });
};

module.exports = additionFormControl;
