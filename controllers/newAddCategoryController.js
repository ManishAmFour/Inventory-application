const dbQueries = require("../model/dbQueries");

const newAddCategoryController = async (req, res) => {
  const { newCategory } = req.body;

  await dbQueries.additionOfCategory(newCategory);

  res.redirect("/");
};

module.exports = newAddCategoryController;
