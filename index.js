const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/user.js");
const albumRoutes = require("./routes/album.js");
const songRoutes = require("./routes/song.js");
const authMiddleWare = require("./middleware/auth.js");
const songs = require("./songsExample.js");

require("dotenv").config();
app.use(cors());
app.use(express.json());
songs.makeSongs(songs.songExample);
//all routes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/albums", authMiddleWare, albumRoutes);
app.use("/api/v1/songs", authMiddleWare, songRoutes);

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);
};

connectDB()
  .then(() => {
    console.log("connection with MongoDB established");
  })
  .catch((error) => {
    console.error("connection with MongoDB was not established ", error);
  });

const port = 5010;
app.listen(port, () => console.log("server up and running at ", port));
