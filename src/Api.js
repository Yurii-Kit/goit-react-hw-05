import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const key = '9b8f2c8838685eeb95cc916c9efe4992';
const options = {
  method: 'GET',
  params: {
    api_key: key,
  },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjhmMmM4ODM4Njg1ZWViOTVjYzkxNmM5ZWZlNDk5MiIsIm5iZiI6MS43NDczMjczMzc5NTgwMDAyZSs5LCJzdWIiOiI2ODI2MTk2OWI5MGMyN2QwOTVhZGE0ZGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.V6Hj2OprNFx1zVio01lTLmDVI2H5Lsm_ncKtgrjtu14',
  },
};

export const fetchNewTrendMovies = async () => {
  const response = await axios.get('/trending/movie/day', options);
  return response.data.results;
};

export const fetchNewMovieDetails = async (movieID) => {
  const response = await axios.get(`/movie/${movieID}`, options);
  return response.data;
};

export const fetchNewMoviesByInput = async (inputValue) => {
  const response = await axios.get(
    `/search/movie?query=${inputValue}`,
    options,
  );
  return response.data.results;
};

export const fetchCast = async (movieID) => {
  const response = await axios.get(`/movie/${movieID}/credits`, options);
  return response.data.cast;
};

export const fetchReviews = async (movieID) => {
  const response = await axios.get(`/movie/${movieID}/reviews`, options);
  return response.data.results;
};
