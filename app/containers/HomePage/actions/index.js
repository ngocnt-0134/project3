import {
  FETCH_MOVIE,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAILE,
  SEARCH_MOVIE,
  SEARCH_MOVIE_SUCCESS,
  SEARCH_MOIVE_FAILE,
} from './type';

export function fetchMovie(page) {
  return {
    type: FETCH_MOVIE,
    page,
  };
}

export function fetchMovieSuccess(repos, movies) {
  return {
    type: FETCH_MOVIE_SUCCESS,
    repos,
    movies,
  };
}

export function fetchMovieFaile(error) {
  return {
    type: FETCH_MOVIE_FAILE,
    error,
  };
}
// Search box

export function searchMovie(txt) {
  return {
    type: SEARCH_MOVIE,
    txt,
  };
}

export function searchMovieSuccess(repos, movies) {
  return {
    type: SEARCH_MOVIE_SUCCESS,
    repos,
    movies,
  };
}

export function searchMovieFaile(error) {
  return {
    type: SEARCH_MOIVE_FAILE,
    error,
  };
}
