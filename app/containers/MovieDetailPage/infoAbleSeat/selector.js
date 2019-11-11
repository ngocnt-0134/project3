import { createSelector } from 'reselect';

import { initialState } from './reducer';

const selectBookingMovie = state => state.book || initialState;

const makeSelectBookingMovie = () =>
  createSelector(
    selectBookingMovie,
    bookingMovie => bookingMovie.book,
  );

const selectInfoBooking = state => state.info || initialState;

const makeSelectInfoBooking = () =>
  createSelector(
    selectInfoBooking,
    detailMovieState => detailMovieState.info,
  );

export {
  selectBookingMovie,
  makeSelectBookingMovie,
  selectInfoBooking,
  makeSelectInfoBooking,
};
