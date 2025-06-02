const express = require("express");
const viewCategory = express.Router();
const categoryController = require("../controllers/categoryController");

viewCategory.get("/category", categoryController);

module.exports = viewCategory;
