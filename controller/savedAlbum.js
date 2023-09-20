const SavedAlbum = require("../model/savedAlbum.js");
const Album = require("../model/album.js");

const getSavedAlbums = async (req, res) => {
  const userId = req.user._id;
  const status = "active";
  let allSavedAlbums;
  try {
    allSavedAlbums = (await SavedAlbum.find({ userId, status })).populate(
      "albumId"
    );
  } catch (error) {
    return res
      .status(404)
      .json({ status: "failure", message: "Something went wrong" });
  }
  if (!allSavedAlbums)
    return res.status(403).json({
      status: "failure",
      message: "You have no saved albums currently",
    });
  return res.json({ status: "success", data: allSavedAlbums });
};

const addDeleteAlbum = async (req, res) => {
  const { albumId } = req.body;
  try {
    const isAlbumPresent = await Album.findById(albumId);
  } catch (error) {
    return res.status(404).json({
      status: "success",
      message: `no album found with id ${albumId}`,
    });
  }
  const userId = req.user._id;
  let message;
  const savedAlbum = await SavedAlbum.findOne({ albumId, userId });
  if (!savedAlbum) {
    const newSavedAlbum = new SavedAlbum({ albumId, userId, status: "active" });
    await newSavedAlbum.save();
    message = `album with albumId ${albumId} saved successfully`;
  } else {
    const status = savedAlbum.status == "active" ? "inactive" : "active";
    await SavedAlbum.findByIdAndUpdate(savedAlbum._id, { status });
    const messageStatus = status == "active" ? "added" : "deleted";
    message = `album with albumId ${albumId} ${messageStatus} successfully`;
  }
  const allSavedAlbums = await SavedAlbum.find({
    userId,
    status: "active",
  }).populate("albumId");
  return res.json({ status: "success", message, data: allSavedAlbums });
};
module.exports = {
  getSavedAlbums,
  addDeleteAlbum,
};
