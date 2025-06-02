const express = require("express");
const viewHome = express.Router();
const homeController = require("../controllers/homeController");
viewHome.get("/", homeController);

module.exports = viewHome;
