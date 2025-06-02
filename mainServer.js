const express = require("express");
const path = require("path");
const mainServer = express();
const viewHome = require("./routes/viewHome");
const viewCategory = require("./routes/viewCategory");
const viewItem = require("./routes/viewItem");
const viewAddition = require("./routes/viewAddition");

const PORT = 5342;
mainServer.set("view engine", "ejs");
mainServer.set("views", path.join(__dirname, "/views"));

mainServer.use(express.urlencoded());
mainServer.use(viewAddition);
mainServer.use(viewCategory);
mainServer.use(viewItem);
mainServer.use(viewHome);

mainServer.listen(PORT);
