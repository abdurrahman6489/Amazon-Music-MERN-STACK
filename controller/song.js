const Song = require("../model/song");
const Album = require("../model/album");
const utilFunctions = require("../Utils/utils.js");
const createSong = async (req, res) => {
  const song = req.body;
  const albumId = req.body.album;
  const album = await Album.findById(albumId);
  console.log(album);
  if (!album)
    return res.status(403).json({
      status: "failure",
      message: `album with album id ${albumId} does not exist`,
    });
  try {
    const newSong = new Song({ ...song });
    await newSong.save();
  } catch (error) {
    return res
      .status(404)
      .json({ status: "failure", message: "something went wrong" });
  }
  return res.json({
    status: "success",
    message: "song added successfully",
    data: song,
  });
};

const getAllSongs = async (req, res) => {
  const query = utilFunctions.getSongQuerySearch(req.query);
  try {
    const allSongs = await Song.find(query);
    console.log(allSongs);
    if (!allSongs || allSongs?.length == 0) {
      return res.status(404).json({ message: "No songs found" });
    }
    return res.json({ status: "success", data: allSongs });
  } catch (error) {
    return res.status(404).json({
      status: "failure",
      message: "something went wrong, please try after some time",
    });
  }
};

const getSong = async (req, res) => {
  const { songId } = req.params;
  try {
    const song = await Song.findById(songId);
    if (!song) {
      return res
        .status(404)
        .json({ status: "failure", message: `Song not found` });
    }
    return res.json({ status: "success", data: song });
  } catch (error) {
    return res
      .status(404)
      .json({ status: "failure", message: "Something went wrong" });
  }
};
module.exports = {
  createSong,
  getAllSongs,
  getSong,
};
