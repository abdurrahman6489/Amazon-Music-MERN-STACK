const express = require("express");
const router = new express.Router();
const savedAlbumController = require("../controller/savedAlbum.js");

router.get("/getSavedAlbums", savedAlbumController.getSavedAlbums);

router.post("/addDeleteAlbum", savedAlbumController.addDeleteAlbum);

module.exports = router;
