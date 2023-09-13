const express = require("express");
const router = new express.Router();
const albumController = require("../controller/album.js");

router.post("/createAlbum", albumController.createAlbum);

module.exports = router;
