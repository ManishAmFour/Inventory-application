const express = require("express");
const viewItem = express.Router();
const itemController = require("../controllers/itemController");

viewItem.get("/item", itemController);

module.exports = viewItem;
