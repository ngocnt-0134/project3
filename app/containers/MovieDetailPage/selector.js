import { createSelector } from 'reselect';

import { initialState } from './reducer';

const selectMovieDetail = state => state.movie || initialState;

const makeSelectMovieDetail = () =>
  createSelector(
    selectMovieDetail,
    detailMovieState => detailMovieState.movie,
  );
const selectInfoBooking = state => state.info || initialState;

const makeSelectInfoBooking = () =>
  createSelector(
    selectInfoBooking,
    detailMovieState => detailMovieState.info,
  );

export {
  makeSelectMovieDetail,
  selectMovieDetail,
  selectInfoBooking,
  makeSelectInfoBooking,
};
