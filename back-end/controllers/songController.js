//dependencies
const express = require("express");
const songsController = express.Router();

//index route of songs
songsController.get("/", (req, res) => {
  res.send("This is index page of songs");
});

//export the sub router of songs
module.exports = songsController;
