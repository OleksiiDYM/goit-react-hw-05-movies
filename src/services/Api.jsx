import axios from 'axios';
import defaultPhoto from '../components/Images/default.jpg';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: 'd49e0110fba862765bd35e51be725d3a',
};

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

export const fetchTrending = async () => {
  return axios.get(`/trending/all/week?`).then(({ data: { results } }) =>
    results.map(({ id, title, poster_path: poster }) => ({
      id,
      title,
      poster: IMG_URL + poster,
    }))
  );
};

export const fetchByQuery = async query => {
  return axios
    .get(`/search/movie?query=${query}`)
    .then(({ data: { results } }) =>
      results.map(({ id, title, poster_path: poster }) => ({
        id,
        title,
        poster: IMG_URL + poster,
      }))
    );
};

export const fetchMovieDetails = movieId => {
  return axios
    .get(`/movie/${movieId}?`)
    .then(
      ({
        data: {
          id,
          poster_path: poster,
          title,
          release_date: releaseYear,
          vote_average: userScore,
          overview,
          genres,
        },
      }) => ({
        id,
        poster: IMG_URL + poster,
        title,
        releaseYear: new Date(releaseYear).getFullYear(),
        userScore: Math.round(userScore * 10),
        overview,
        genres,
      })
    );
};

export const fetchMovieCredits = movieId => {
  return axios.get(`/movie/${movieId}/credits?`).then(({ data: { cast } }) =>
    cast.map(({ id, name, character, profile_path: photo }) => ({
      id,
      name,
      character,
      photo: photo ? IMG_URL + photo : defaultPhoto,
    }))
  );
};

export const fetchMovieReviews = movieId => {
  return axios.get(`/movie/${movieId}/reviews?`).then(({ data: { results } }) =>
    results.map(({ id, author, content }) => ({
      id,
      author,
      content,
    }))
  );
};
