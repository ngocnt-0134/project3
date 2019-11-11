import {
  FETCH_USER,
  FETCH_USER_FAILE,
  FETCH_USER_SUCCESS,
  FETCH_FEATURE_MOVIE,
  FETCH_FEATURE_MOVIE_SUCCESS,
  FETCH_FEATURE_MOVIE_FAILE,
} from './types';

export function fetchUser() {
  return {
    type: FETCH_USER,
  };
}

export function fetchUserSuccess(repos, user) {
  return {
    type: FETCH_USER_SUCCESS,
    repos,
    user,
  };
}

export function fetchUserFaile(error) {
  return {
    type: FETCH_USER_FAILE,
    error,
  };
}
// FEATCH FEATURE MOVIE

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
