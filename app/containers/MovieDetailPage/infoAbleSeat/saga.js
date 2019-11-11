/* eslint-disable no-console */
import { call, put, select, takeLatest } from 'redux-saga/effects';

import { makeSelectBookingMovie } from './selector';
import { BOOKING_MOVIE } from './actions/types';
import { bookingMovieSucess, bookingMovieFaile } from './actions/index';

import { bookingMovie } from './bookingApi';

export function* bookingMovieAction({ data, id }) {
  // Select movies from store
  const book = yield select(makeSelectBookingMovie());
  try {
    const repos = yield call(bookingMovie, data, id);
    yield put(bookingMovieSucess(repos, book, id));
  } catch (err) {
    yield put(bookingMovieFaile(err));
  }
}

export default function* watchFetchMovieById() {
  // watch action
  yield takeLatest(BOOKING_MOVIE, bookingMovieAction);
}
