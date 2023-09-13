const express = require("express");
const router = new express.Router();
const songController = require("../controller/song.js");

router.post("/createSong", songController.createSong);

module.exports = router;
