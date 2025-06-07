const express = require("express");
const viewAddCategory = express.Router();
const newAddCategoryController = require("../controllers/newAddCategoryController");
const newCategoryController = require("../controllers/newCategoryController");

viewAddCategory.get("/newcategory", newCategoryController);
viewAddCategory.post("/newcategory", newAddCategoryController);

module.exports = viewAddCategory;
