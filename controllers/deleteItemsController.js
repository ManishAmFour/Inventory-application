const deleteItemsController = (req, res) => {
  console.log(req.params.deleteValue);
  res.end();
};

module.exports = deleteItemsController;
