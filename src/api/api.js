import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjA1ODRjY2MyNGUzOGUwODY2MjhiZDYxMGQyYjUwOSIsInN1YiI6IjY0NzUwZTMyMWJmMjY2MDQzZDJmYTNkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8iMn_9jzMLQ6tsrySBCRE-qg_BgMVvp1Gubh2TkRYtk',
  },
});

export async function getTrendingMovies() {
  const response = await instance.get('trending/all/day');
  return response.data;
}
export async function searchMovies(querry) {
  const response = await instance.get(`search/movie?query=${querry}`);
  return response.data;
}
export async function getMovieData(movieid) {
  const response = await instance.get(`movie/${movieid}`);
  return response.data;
}
export async function getMovieCredits(movieid) {
  const response = await instance.get(`movie/${movieid}/credits`);
  return response.data;
}
export async function getMovieReviews(movieid) {
  const response = await instance.get(`movie/${movieid}/reviews`);
  return response.data;
}
