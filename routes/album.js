const express = require("express");
const router = new express.Router();
const albumController = require("../controller/album.js");

router.post("/createAlbum", albumController.createAlbum);

router.get("/getAlbums", albumController.getAllAlbums);

router.get("/getAlbums/:albumId", albumController.getAlbumById);

module.exports = router;
