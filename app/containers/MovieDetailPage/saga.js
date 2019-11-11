/* eslint-disable no-console */
import { call, put, select, takeLatest, all } from 'redux-saga/effects';

import { makeSelectMovieDetail, makeSelectInfoBooking } from './selector';
import { FETCH_MOVIE_BY_ID, GET_BOOKING_ABLE } from './actions/types';
import {
  fetchMovieByIdSuccess,
  fetchMovieByIdFaile,
  getBookAbleSeatFaile,
  getBookAbleSeatSuccess,
} from './actions/index';

import { getInfoSeatMovie } from './requests/getSeatMovie';
// import request from './request/index';
import { fetchMovieById } from './requests/fetchMovieById';

export function* fetchMovieByIdAc({ id }) {
  // Select movies from store
  const movie = yield select(makeSelectMovieDetail());
  try {
    const repos = yield call(fetchMovieById, id);
    yield put(fetchMovieByIdSuccess(repos, movie));
  } catch (err) {
    yield put(fetchMovieByIdFaile(err));
  }
}

// Booking saga
export function* getBookAbleSeatAction({ id }) {
  const info = yield select(makeSelectInfoBooking());
  try {
    const repos = yield call(getInfoSeatMovie, id);
    yield put(getBookAbleSeatSuccess(repos, info));
  } catch (err) {
    yield put(getBookAbleSeatFaile(err));
  }
}

export default function* watchFetchMovieById() {
  // watch action
  yield all([
    takeLatest(FETCH_MOVIE_BY_ID, fetchMovieByIdAc),
    takeLatest(GET_BOOKING_ABLE, getBookAbleSeatAction),
  ]);
}
