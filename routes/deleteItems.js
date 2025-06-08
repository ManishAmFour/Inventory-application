const express = require("express");
const deleteItemsController = require("../controllers/deleteItemsController");
const deleteCatItemsController = require("../controllers/deleteCatItemsController");

const deleteItems = express.Router();

deleteItems.get("/delete", deleteItemsController);
deleteItems.post("/delete", deleteCatItemsController);

module.exports = deleteItems;
