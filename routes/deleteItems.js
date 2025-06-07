const express = require("express");
const deleteItemsController = require("../controllers/deleteItemsController");
const deleteItems = express.Router();

deleteItems.get("/delete", deleteItemsController);

module.exports = deleteItems;
