const Album = require("../model/album.js");
const Song = require("../model/song.js");
const utilFunctions = require("../Utils/utils.js");
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
  const query = utilFunctions.getQuerySearch(req.query);
  try {
    const allAlbums = await Album.find(query);
    console.log(allAlbums);
    return res.json({ status: "success", data: allAlbums });
  } catch (error) {
    return res.status(404).json({
      status: "failure",
      message: "something went wrong, please try after some time",
    });
  }
};

const getAlbumById = async (req, res) => {
  const { albumId } = req.params;
  const album = await Album.findById(albumId);
  if (!album) {
    return res.status(404).json({
      status: "failure",
      message: `Album with id ${albumId} not found`,
    });
  }
  const songs = await Song.find({ album: albumId });
  const data = { album, songs };
  return res.json({ status: "success", data });
};
module.exports = {
  createAlbum,
  getAllAlbums,
  getAlbumById,
};
