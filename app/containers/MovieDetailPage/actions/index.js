import {
  FETCH_MOVIE_BY_ID,
  FETCH_MOVIE_BY_ID_SUCCESS,
  FETCH_MOVIE_BY_ID_FAILE,
  GET_BOOKING_ABLE,
  GET_BOOKING_ABLE_SUCCSESS,
  GET_BOOKING_ABLE_FAILE,
} from './types';

export function fetchMovieById(id) {
  return {
    type: FETCH_MOVIE_BY_ID,
    id,
  };
}
export function fetchMovieByIdSuccess(repos, movie) {
  return {
    type: FETCH_MOVIE_BY_ID_SUCCESS,
    repos,
    movie,
  };
}
export function fetchMovieByIdFaile(error) {
  return {
    type: FETCH_MOVIE_BY_ID_FAILE,
    error,
  };
}
// =========
export function getBookingAbleSeat(id) {
  return {
    type: GET_BOOKING_ABLE,
    id,
  };
}
export function getBookAbleSeatSuccess(repos, info) {
  return {
    type: GET_BOOKING_ABLE_SUCCSESS,
    repos,
    info,
  };
}
export function getBookAbleSeatFaile(error) {
  return {
    type: GET_BOOKING_ABLE_FAILE,
    error,
  };
}
// booking
