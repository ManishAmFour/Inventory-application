const dbQueries = require("../model/dbQueries");

const additionFormControlPost = async (req, res) => {
  const { title } = req.body;
  const { category } = req.body;
  const { price } = req.body;
  const { rating } = req.body;

  await dbQueries.additionToDatabase(title, category, price, rating);
  await dbQueries.fetchingTheDatabaseForCategory();

  res.redirect("/");
};

module.exports = additionFormControlPost;
