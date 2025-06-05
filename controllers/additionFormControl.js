const dbQueries = require("../model/dbQueries");

const additionFormControl = async (req, res) => {
  const rows = await dbQueries.fetchingTheDatabaseForCategory();
  const categories = [];
  for (let i = 0; i < rows.length; i++) {
    if (!categories.includes(`${rows[i].title}`)) {
      categories.push(rows[i].title);
    }
  }
  res.render("add", { categories: categories });
};

module.exports = additionFormControl;
