const express = require("express");
const router = new express.Router();
const songController = require("../controller/song.js");
const AUTH_MIDDLEWARE = require("../middleware/auth.js");
const ADMIN_MIDDLEWARE = require("../middleware/admin.js");

router.post(
  "/createSong",
  AUTH_MIDDLEWARE,
  ADMIN_MIDDLEWARE,
  songController.createSong
);

router.get("/getSongs", songController.getAllSongs);

router.get("/getSong/:songId", songController.getSong);

module.exports = router;
