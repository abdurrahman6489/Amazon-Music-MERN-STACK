const Song = require("../model/song");
const Album = require("../model/album");

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
  const { filter } = req.query || {};
};
module.exports = {
  createSong,
};
