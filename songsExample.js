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
    _id: "64cf911947ae38c3e33a2523",
    title: "Chaand Baaliyan",
    artist: ["64ce7c0bbbbada037c35ee95"],
    album: "64cee72fe41f6d0a8b0cd0e4",
    likedBy: [],
    dateOfRelease: "2020-03-28T00:00:00.000Z",
    type: "song",
    mood: "romantic",
    thumbnail:
      "https://newton-project-resume-backend.s3.amazonaws.com/thumbnail/64cf911947ae38c3e33a2523.jpg",
    appType: "music",
    createdAt: "2023-08-06T12:24:57.914Z",
    __v: 0,
    audio_url:
      "https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf911947ae38c3e33a2523.mp3",
  },
];

module.exports = {
  makeSongs,
  songExample,
};
