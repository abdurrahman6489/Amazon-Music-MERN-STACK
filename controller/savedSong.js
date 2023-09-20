const SavedSong = require("../model/savedSong.js");
const Song = require("../model/song.js");
const getSavedSongs = async (req, res) => {
  const userId = req.user._id;
  const status = "active";
  let allSavedSongs;
  try {
    allSavedSongs = await SavedSong.find({ userId, status }).populate("songId");
  } catch (error) {
    return res
      .status(404)
      .json({ status: "failure", message: "Something went wrong" });
  }
  if (!allSavedSongs)
    return res.status(403).json({
      status: "failure",
      message: "You have no saved songs currently",
    });
  return res.json({ status: "success", data: allSavedSongs });
};
const addDeleteSonog = async (req, res) => {
  const { songId } = req.body;
  try {
    const isSongPresent = await Song.findById(songId);
  } catch (error) {
    return res.status(404).json({
      status: "failure",
      message: `no song found with id ${songId}`,
    });
  }
  const userId = req.user._id;
  let message;
  let status;
  const savedSong = await SavedSong.findOne({ songId, userId });
  if (!savedSong) {
    status = "active";
    message = `song with id ${songId} added successfully`;
    const newSavedSong = new SavedSong({ songId, userId, status });
    await newSavedSong.save();
  } else {
    status = savedSong.status == "active" ? "inactive" : "active";
    await SavedSong.findByIdAndUpdate(savedSong._id, { status });
    const messageStatus = status == "active" ? "added" : "deleted";
    message = `song with id ${songId} ${messageStatus} successfully`;
  }
  const allSavedSong = await SavedSong.find({
    userId,
    status: "active",
  }).populate("songId");
  return res.json({ status: "success", message, data: allSavedSong });
};
module.exports = {
  getSavedSongs,
  addDeleteSonog,
};
