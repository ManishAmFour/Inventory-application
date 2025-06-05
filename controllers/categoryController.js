const dbQueries = require("../model/dbQueries");

const categoryController = async (req, res) => {
  const rows = await dbQueries.fetchingTheDatabaseForCategory();
  const categories = [];
  for (let i = 0; i < rows.length; i++) {
    if (!categories.includes(`${rows[i].title}`)) {
      categories.push(rows[i].title);
    }
  }
  res.render("categories", { categories: categories });
};
module.exports = categoryController;
