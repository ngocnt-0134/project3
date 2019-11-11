import { call, put, select, takeLatest, all } from 'redux-saga/effects';

import { makeSelectUser, makeSelectSlide } from './selector';
import { FETCH_USER, FETCH_FEATURE_MOVIE } from './actions/types';
import {
  fetchUserSuccess,
  fetchUserFaile,
  fetchFeatureMovieSuccess,
  fetchFeatureMovieFaile,
} from './actions';
import { fetchUser } from './fetchUser';

import { fetchFeatureMovie } from './fetchFeatureMovie';
export function* fetchCurrentUser() {
  // Select user from store
  const user = yield select(makeSelectUser());
  try {
    const repos = yield call(fetchUser);
    yield put(fetchUserSuccess(repos, user));
  } catch (err) {
    yield put(fetchUserFaile(err));
  }
}

export function* fetchFeatureMovieSlides() {
  // Select movies from store

  const slides = yield select(makeSelectSlide());
  try {
    const repos = yield call(fetchFeatureMovie);
    yield put(fetchFeatureMovieSuccess(repos, slides));
  } catch (err) {
    yield put(fetchFeatureMovieFaile(err));
  }
}
/**
 * Root saga manages watcher lifecycle
 */
export default function* watchFecthUser() {
  // watch action
  yield all([
    takeLatest(FETCH_USER, fetchCurrentUser),
    takeLatest(FETCH_FEATURE_MOVIE, fetchFeatureMovieSlides),
  ]);
}
