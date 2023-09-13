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
    _id: "64cf90be47ae38c3e33a1dbb",
    title: "Des Rangila",
    artist: ["64ce7c0bbbbada037c35ee17"],
    album: "64cee72fe41f6d0a8b0cd0bc",
    likedBy: [],
    dateOfRelease: "2017-07-25T00:00:00.000Z",
    type: "song",
    mood: "happy",
    thumbnail:
      "https://newton-project-resume-backend.s3.amazonaws.com/thumbnail/64cf90be47ae38c3e33a1dbb.jpg",
    appType: "music",
    createdAt: "2023-08-06T12:23:26.206Z",
    __v: 0,
    audio_url:
      "https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf90be47ae38c3e33a1dbb.mp3",
  },
  {
    _id: "64cf90be47ae38c3e33a1dc4",
    title: "Chak De India",
    artist: [
      "64ce7c0bbbbada037c35edaa",
      "64ce7c0bbbbada037c35edab",
      "64ce7c0bbbbada037c35edac",
    ],
    album: "64cee72fe41f6d0a8b0cd0bc",
    likedBy: [],
    dateOfRelease: "2017-07-25T00:00:00.000Z",
    type: "song",
    mood: "happy",
    thumbnail:
      "https://newton-project-resume-backend.s3.amazonaws.com/thumbnail/64cf90be47ae38c3e33a1dc4.jpg",
    appType: "music",
    createdAt: "2023-08-06T12:23:26.638Z",
    __v: 0,
    audio_url:
      "https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf90be47ae38c3e33a1dc4.mp3",
    featured: "Top 50 of this month",
  },
  {
    featured: null,
    _id: "64cf90bf47ae38c3e33a1dd0",
    title: "I Am India",
    artist: ["64ce7c0bbbbada037c35edd8", "64ce7c0bbbbada037c35ee21"],
    album: "64cee72fe41f6d0a8b0cd0bc",
    likedBy: [],
    dateOfRelease: "2017-07-25T00:00:00.000Z",
    type: "song",
    mood: "excited",
    thumbnail:
      "https://newton-project-resume-backend.s3.amazonaws.com/thumbnail/64cf90bf47ae38c3e33a1dd0.jpg",
    appType: "music",
    createdAt: "2023-08-06T12:23:27.232Z",
    __v: 0,
    audio_url:
      "https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf90bf47ae38c3e33a1dd0.mp3",
  },
  {
    featured: null,
    _id: "64cf90bf47ae38c3e33a1ddc",
    title: "Aisa Des Hai Mera",
    artist: [
      "64ce7c0bbbbada037c35ee14",
      "64ce7c0bbbbada037c35edb6",
      "64ce7c0bbbbada037c35ee15",
      "64ce7c0bbbbada037c35ee16",
    ],
    album: "64cee72fe41f6d0a8b0cd0bc",
    likedBy: [],
    dateOfRelease: "2017-07-25T00:00:00.000Z",
    type: "song",
    mood: "happy",
    thumbnail:
      "https://newton-project-resume-backend.s3.amazonaws.com/thumbnail/64cf90bf47ae38c3e33a1ddc.jpg",
    appType: "music",
    createdAt: "2023-08-06T12:23:27.821Z",
    __v: 0,
    audio_url:
      "https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf90bf47ae38c3e33a1ddc.mp3",
  },
  {
    _id: "64cf90c047ae38c3e33a1de9",
    title: "Bekhauff",
    artist: ["64ce7c0bbbbada037c35ee1b"],
    album: "64cee72fe41f6d0a8b0cd0bc",
    likedBy: [],
    dateOfRelease: "2017-07-25T00:00:00.000Z",
    type: "song",
    mood: "sad",
    thumbnail:
      "https://newton-project-resume-backend.s3.amazonaws.com/thumbnail/64cf90c047ae38c3e33a1de9.jpg",
    appType: "music",
    createdAt: "2023-08-06T12:23:28.465Z",
    __v: 0,
    audio_url:
      "https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf90c047ae38c3e33a1de9.mp3",
    featured: "Top 20 of this week",
  },
  {
    featured: null,
    _id: "64cf90c047ae38c3e33a1df1",
    title: "Mardaani Anthem",
    artist: ["64ce7c0bbbbada037c35ee18", "64ce7c0bbbbada037c35ee19"],
    album: "64cee72fe41f6d0a8b0cd0bc",
    likedBy: [],
    dateOfRelease: "2017-07-25T00:00:00.000Z",
    type: "song",
    mood: "sad",
    thumbnail:
      "https://newton-project-resume-backend.s3.amazonaws.com/thumbnail/64cf90c047ae38c3e33a1df1.jpg",
    appType: "music",
    createdAt: "2023-08-06T12:23:28.841Z",
    __v: 0,
    audio_url:
      "https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf90c047ae38c3e33a1df1.mp3",
  },
  {
    featured: null,
    _id: "64cf90c147ae38c3e33a1dfb",
    title: "Satyamev Jayate Anthem",
    artist: ["64ce7c0bbbbada037c35ee1a", "64ce7c0bbbbada037c35edcc"],
    album: "64cee72fe41f6d0a8b0cd0bc",
    likedBy: [],
    dateOfRelease: "2017-07-25T00:00:00.000Z",
    type: "song",
    mood: "romantic",
    thumbnail:
      "https://newton-project-resume-backend.s3.amazonaws.com/thumbnail/64cf90c147ae38c3e33a1dfb.jpg",
    appType: "music",
    createdAt: "2023-08-06T12:23:29.335Z",
    __v: 0,
    audio_url:
      "https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf90c147ae38c3e33a1dfb.mp3",
  },
  {
    featured: null,
    _id: "64cf90c147ae38c3e33a1e06",
    title: "Jag Mag",
    artist: [
      "64ce7c0bbbbada037c35edd8",
      "64ce7c0bbbbada037c35ee21",
      "64ce7c0bbbbada037c35ee22",
    ],
    album: "64cee72fe41f6d0a8b0cd0bc",
    likedBy: [],
    dateOfRelease: "2017-07-25T00:00:00.000Z",
    type: "song",
    mood: "happy",
    thumbnail:
      "https://newton-project-resume-backend.s3.amazonaws.com/thumbnail/64cf90c147ae38c3e33a1e06.jpg",
    appType: "music",
    createdAt: "2023-08-06T12:23:29.871Z",
    __v: 0,
    audio_url:
      "https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf90c147ae38c3e33a1e06.mp3",
  },
  {
    featured: null,
    _id: "64cf90c247ae38c3e33a1e11",
    title: "Bharat Bhagya Vidhata Uth",
    artist: ["64ce7c0bbbbada037c35edbb"],
    album: "64cee72fe41f6d0a8b0cd0bc",
    likedBy: [],
    dateOfRelease: "2017-07-25T00:00:00.000Z",
    type: "song",
    mood: "sad",
    thumbnail:
      "https://newton-project-resume-backend.s3.amazonaws.com/thumbnail/64cf90c247ae38c3e33a1e11.jpg",
    appType: "music",
    createdAt: "2023-08-06T12:23:30.408Z",
    __v: 0,
    audio_url:
      "https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf90c247ae38c3e33a1e11.mp3",
  },
  {
    featured: null,
    _id: "64cf90c247ae38c3e33a1e18",
    title: "Dhoondata Hai Man Mera",
    artist: ["64ce7c0bbbbada037c35edcc"],
    album: "64cee72fe41f6d0a8b0cd0bc",
    likedBy: [],
    dateOfRelease: "2017-07-25T00:00:00.000Z",
    type: "song",
    mood: "sad",
    thumbnail:
      "https://newton-project-resume-backend.s3.amazonaws.com/thumbnail/64cf90c247ae38c3e33a1e18.jpg",
    appType: "music",
    createdAt: "2023-08-06T12:23:30.731Z",
    __v: 0,
    audio_url:
      "https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf90c247ae38c3e33a1e18.mp3",
  },
  {
    featured: null,
    _id: "64cf90c347ae38c3e33a1e1f",
    title: "Aam Ke Aam Honge",
    artist: ["64ce7c0bbbbada037c35ee1c"],
    album: "64cee72fe41f6d0a8b0cd0bc",
    likedBy: [],
    dateOfRelease: "2017-07-25T00:00:00.000Z",
    type: "song",
    mood: "excited",
    thumbnail:
      "https://newton-project-resume-backend.s3.amazonaws.com/thumbnail/64cf90c347ae38c3e33a1e1f.jpg",
    appType: "music",
    createdAt: "2023-08-06T12:23:31.059Z",
    __v: 0,
    audio_url:
      "https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf90c347ae38c3e33a1e1f.mp3",
  },
  {
    featured: null,
    _id: "64cf90c347ae38c3e33a1e28",
    title: "Khelen",
    artist: [
      "64ce7c0bbbbada037c35ee1e",
      "64ce7c0bbbbada037c35ee1d",
      "64ce7c0bbbbada037c35ee1f",
    ],
    album: "64cee72fe41f6d0a8b0cd0bc",
    likedBy: [],
    dateOfRelease: "2017-07-25T00:00:00.000Z",
    type: "song",
    mood: "happy",
    thumbnail:
      "https://newton-project-resume-backend.s3.amazonaws.com/thumbnail/64cf90c347ae38c3e33a1e28.jpg",
    appType: "music",
    createdAt: "2023-08-06T12:23:31.485Z",
    __v: 0,
    audio_url:
      "https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf90c347ae38c3e33a1e28.mp3",
  },
  {
    _id: "64cf90c447ae38c3e33a1e33",
    title: "Maati",
    artist: ["64ce7c0bbbbada037c35ee20"],
    album: "64cee72fe41f6d0a8b0cd0bc",
    likedBy: [],
    dateOfRelease: "2017-07-25T00:00:00.000Z",
    type: "song",
    mood: "sad",
    thumbnail:
      "https://newton-project-resume-backend.s3.amazonaws.com/thumbnail/64cf90c447ae38c3e33a1e33.jpg",
    appType: "music",
    createdAt: "2023-08-06T12:23:32.024Z",
    __v: 0,
    audio_url:
      "https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf90c447ae38c3e33a1e33.mp3",
    featured: "Evergreen melodies",
  },
  {
    featured: null,
    _id: "64cf90c447ae38c3e33a1e3a",
    title: "Yeh Duaa",
    artist: ["64ce7c0bbbbada037c35edcc"],
    album: "64cee72fe41f6d0a8b0cd0bc",
    likedBy: [],
    dateOfRelease: "2017-07-25T00:00:00.000Z",
    type: "song",
    mood: "romantic",
    thumbnail:
      "https://newton-project-resume-backend.s3.amazonaws.com/thumbnail/64cf90c447ae38c3e33a1e3a.jpg",
    appType: "music",
    createdAt: "2023-08-06T12:23:32.347Z",
    __v: 0,
    audio_url:
      "https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf90c447ae38c3e33a1e3a.mp3",
  },
  {
    featured: null,
    _id: "64cf90c447ae38c3e33a1e41",
    title: "Saawan Aayo Re",
    artist: ["64ce7c0bbbbada037c35edcc"],
    album: "64cee72fe41f6d0a8b0cd0bc",
    likedBy: [],
    dateOfRelease: "2017-07-25T00:00:00.000Z",
    type: "song",
    mood: "excited",
    thumbnail:
      "https://newton-project-resume-backend.s3.amazonaws.com/thumbnail/64cf90c447ae38c3e33a1e41.jpg",
    appType: "music",
    createdAt: "2023-08-06T12:23:32.671Z",
    __v: 0,
    audio_url:
      "https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf90c447ae38c3e33a1e41.mp3",
  },
  {
    featured: null,
    _id: "64cf90c447ae38c3e33a1e48",
    title: "Mumkin Hai",
    artist: ["64ce7c0bbbbada037c35edcc"],
    album: "64cee72fe41f6d0a8b0cd0bc",
    likedBy: [],
    dateOfRelease: "2017-07-25T00:00:00.000Z",
    type: "song",
    mood: "romantic",
    thumbnail:
      "https://newton-project-resume-backend.s3.amazonaws.com/thumbnail/64cf90c447ae38c3e33a1e48.jpg",
    appType: "music",
    createdAt: "2023-08-06T12:23:32.994Z",
    __v: 0,
    audio_url:
      "https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf90c447ae38c3e33a1e48.mp3",
  },
];

module.exports = {
  makeSongs,
  songExample,
};
