export const getAnimes = async function (page = 0) {
  const rowData = await fetch(`https://api.jikan.moe/v4/anime?page=${page}&limit=25&order_by=score&sort=desc`);
  const data = await rowData.json();
  return data.data;
};
