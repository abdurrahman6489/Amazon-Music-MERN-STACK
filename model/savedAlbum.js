const mongoose = require("mongoose");

const savedAlbumSchema = {
  albumId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "albums",
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
};
const SavedAlbum = mongoose.model("savedAlbums", savedAlbumSchema);
module.exports = SavedAlbum;
