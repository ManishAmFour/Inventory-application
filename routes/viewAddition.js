const express = require("express");
const viewAddition = express.Router();
const additionFormControl = require("../controllers/additionFormControl");
const additionFormControlPost = require("../controllers/additionFormControlPost");

viewAddition.get("/addition", additionFormControl);
viewAddition.post("/addition", additionFormControlPost);

module.exports = viewAddition;
