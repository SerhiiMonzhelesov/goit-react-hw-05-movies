import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '345007f9ab440e5b86cef51be6397df1',
  },
});

export const requestMovies = async () => {
  const { data } = await instance.get('trending/movie/day');
  return data.results;
};

export const requestMovie = async id => {
  const { data } = await instance.get(`movie/${id}`);
  return data;
};

export const requestActors = async id => {
  const { data } = await instance.get(`movie/${id}/credits`);
  return data.cast;
};

export const requestReviews = async id => {
  const { data } = await instance.get(`movie/${id}/reviews`);
  return data.results;
};

export const requestMovieBySearch = async searchValue => {
  const { data } = await instance.get(`search/movie?query=${searchValue}`);
  return data.results;
};
