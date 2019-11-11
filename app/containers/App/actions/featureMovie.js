import {
  FETCH_FEATURE_MOVIE,
  FETCH_FEATURE_MOVIE_SUCCESS,
  FETCH_FEATURE_MOVIE_FAILE,
} from './types';

export function fetchFeatureMovie() {
  return {
    type: FETCH_FEATURE_MOVIE,
  };
}
export function fetchFeatureMovieSuccess(repos, slides) {
  return {
    type: FETCH_FEATURE_MOVIE_SUCCESS,
    repos,
    slides,
  };
}
export function fetchFeatureMovieFaile(error) {
  return {
    type: FETCH_FEATURE_MOVIE_FAILE,
    error,
  };
}
