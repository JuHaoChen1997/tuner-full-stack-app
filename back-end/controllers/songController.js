//dependencies
const express = require("express");
const songs = express.Router();

//get the database
const db = require("../db/dbConfig");

//index route of songs
songs.get("/", async (req, res) => {
  //any() coming from the pg promise, first argument is sql command,
  //.any will take anything the sql command return
  const allSongs = await db.any("SELECT * FROM songs");
  res.json({ success: true, songs: allSongs });
});

//route to post new song
songs.post("/new", (req, res) => {});

//route get individual song back
songs.get("/:id", (req, res) => {});

//export the sub router of songs
module.exports = songs;
