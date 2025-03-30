export const exerciseOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '8e9f291db8msh0377100633ff1f1p1b1d48jsn4a0838c0f239',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '8e9f291db8msh0377100633ff1f1p1b1d48jsn4a0838c0f239',
    'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
