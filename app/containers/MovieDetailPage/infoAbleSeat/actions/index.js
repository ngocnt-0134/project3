import {
  BOOKING_MOVIE,
  BOOKING_MOVIE_FAILE,
  BOOKING_MOVIE_SUCCSESS,
} from './types';

export function bookingMovie(data, id) {
  return {
    type: BOOKING_MOVIE,
    data,
    id,
  };
}

export function bookingMovieSucess(repos, book, id) {
  return {
    type: BOOKING_MOVIE_SUCCSESS,
    repos,
    book,
    id,
  };
}

export function bookingMovieFaile(error) {
  return {
    type: BOOKING_MOVIE_FAILE,
    error,
  };
}
