const getQuerySearch = (queryParameter) => {
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
module.exports = { getQuerySearch };
