const express = require("express");
const router = new express.Router();
const songController = require("../controller/song.js");

router.post("/createSong", songController.createSong);

router.get("/getSongs", songController.getAllSongs);

router.get("/getSong/:songId", songController.getSong);

module.exports = router;
