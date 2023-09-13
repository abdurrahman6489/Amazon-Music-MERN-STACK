const Album = require("../model/album.js");
const Song = require("../model/song.js");
const createAlbum = async (req, res) => {
  const album = req.body;
  console.log("album is ", album);
  try {
    const newAlbum = new Album({ ...album });
    await newAlbum.save();
  } catch (error) {
    return res
      .status(404)
      .json({ status: "failure", message: "something went wrong" });
  }
  return res.json({
    status: "success",
    message: "album added successfully",
    data: album,
  });
};

const getAllAlbums = async (req, res) => {
  return res.json({ status: "success" });
};
module.exports = {
  createAlbum,
  getAllAlbums,
};
