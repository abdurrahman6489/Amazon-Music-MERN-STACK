const express = require("express");
const router = new express.Router();
const albumController = require("../controller/album.js");
const AUTH_MIDDLEWARE = require("../middleware/auth.js");
const ADMIN_MIDDLEWARE = require("../middleware/admin.js");

router.post(
  "/createAlbum",
  AUTH_MIDDLEWARE,
  ADMIN_MIDDLEWARE,
  albumController.createAlbum
);

router.get("/getAlbums", albumController.getAllAlbums);

router.get("/getAlbums/:albumId", albumController.getAlbumById);

module.exports = router;
