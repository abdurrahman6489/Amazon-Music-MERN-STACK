const Album = require("../model/album.js");
const Song = require("../model/song.js");
const utilFunctions = require("../Utils/utils.js");

const getAlbumOrSong = async (req, res) => {
  const query = utilFunctions.getQuerySearch(req.query);
  let allData;
  try {
    if (query?.playListName) {
      allData = await Album.find(query);
    } else {
      allData = await Song.find(query);
    }
    if (!allData || allData?.length == 0) {
      return res.status(404).json({ message: "No data found" });
    }
    return res.json({ status: "success", data: allData });
  } catch (error) {
    return res.status(404).json({
      status: "failure",
      message: "something went wrong, please try after some time",
    });
  }
};

module.exports = {
  getAlbumOrSong,
};
