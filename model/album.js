const mongoose = require("mongoose");

const albumSchema = {
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  release: {
    type: Date,
    required: true,
  },
  artists: {
    type: [String],
    required: false,
    default: [],
  },
  playListName: {
    type: String,
    required: true,
  },
};

const Album = mongoose.model("albums", albumSchema);
module.exports = Album;
