const mongoose = require("mongoose");

const savedSongSchema = {
  songId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "songs",
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

const SavedSong = mongoose.model("savedSongs", savedSongSchema);
module.exports = SavedSong;
