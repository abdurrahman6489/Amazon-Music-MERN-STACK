const express = require("express");
const router = new express.Router();
const savedSongController = require("../controller/savedSong.js");

router.get("/getSavedSongs", savedSongController.getSavedSongs);

router.post("/addDeleteSong", savedSongController.addDeleteSonog);

module.exports = router;
