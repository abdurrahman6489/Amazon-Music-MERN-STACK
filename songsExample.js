const makeSongs = (songArray) => {
  const newSongArray = songArray?.map((song) => {
    const { title, dateOfRelease, mood, thumbnail, audio_url } = song;
    return { title, dateOfRelease, mood, thumbnail, audio_url };
  });
  console.log(JSON.stringify(newSongArray, null, "\t"));
  return newSongArray;
};

const songExample = [
  {
    featured: null,
    _id: "64cf910847ae38c3e33a23bf",
    title: "Car Keys (Ayla)",
    artist: ["64ce7c0bbbbada037c35ee7d", "64ce7c0bbbbada037c35ee7e"],
    album: "64cee72fe41f6d0a8b0cd0d9",
    likedBy: [],
    dateOfRelease: "2023-06-30T00:00:00.000Z",
    type: "song",
    mood: "excited",
    thumbnail:
      "https://newton-project-resume-backend.s3.amazonaws.com/thumbnail/64cf910847ae38c3e33a23bf.jpg",
    appType: "music",
    createdAt: "2023-08-06T12:24:40.947Z",
    __v: 0,
    audio_url:
      "https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf910847ae38c3e33a23bf.mp3",
  },
];

module.exports = {
  makeSongs,
  songExample,
};
