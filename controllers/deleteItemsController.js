const dbQueries = require("../model/dbQueries");

const deleteItemsController = async (req, res) => {
  const valueIdentified = req.query.deleteValue;
  await dbQueries.deleteTheItems(valueIdentified);
  res.redirect("/item");
};

module.exports = deleteItemsController;
