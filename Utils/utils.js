const getAlbumQuerySearch = (queryParameter) => {
  let { filter } = queryParameter ? queryParameter : null;
  filter = filter ? JSON.parse(filter) : null;
  const playListNameQuery = filter?.playListName
    ? { playListName: { $eq: filter?.playListName } }
    : {};
  const titleQuery = filter?.title
    ? { title: { $regex: new RegExp(filter?.title), $options: "i" } }
    : {};

  const query = { ...playListNameQuery, ...titleQuery };
  return query;
};

const getSongQuerySearch = (queryParameter) => {
  let { filter } = queryParameter ? queryParameter : null;
  filter = filter ? JSON.parse(filter) : null;
  const moodQuery = filter?.mood ? { mood: { $eq: filter?.mood } } : {};
  const titleQuery = filter?.title
    ? { title: { $regex: new RegExp(filter?.title), $options: "i" } }
    : {};

  const query = { ...moodQuery, ...titleQuery };
  return query;
};

const getQuerySearch = (queryParameter) => {
  let { filter } = queryParameter ? queryParameter : null;
  filter = filter ? JSON.parse(filter) : null;
  const moodQuery = filter?.mood ? { mood: { $eq: filter?.mood } } : {};
  const titleQuery = filter?.title
    ? { title: { $regex: new RegExp(filter?.title), $options: "i" } }
    : {};
  const playListNameQuery = filter?.playListName
    ? { playListName: { $eq: filter?.playListName } }
    : {};
  const query = { ...moodQuery, ...titleQuery, ...playListNameQuery };
  return query;
};
module.exports = { getAlbumQuerySearch, getSongQuerySearch, getQuerySearch };
