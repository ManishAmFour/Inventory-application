const dbQueries = require("../model/dbQueries");

const deleteCatItemsController = async (req, res) => {
  const { deleteCategory } = req.body;

  await dbQueries.deleteTheCategory(deleteCategory);
  res.redirect("/category");
};

module.exports = deleteCatItemsController;
