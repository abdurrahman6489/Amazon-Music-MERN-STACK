const express = require("express");
const router = new express.Router();
const albumSongController = require("../controller/albumSong.js");

router.get("/albumSong", albumSongController.getAlbumOrSong);

module.exports = router;
