import { call, put, select, takeLatest } from 'redux-saga/effects';

import { makeSelectSlide } from './selector';
import { FETCH_FEATURE_MOVIE } from './actions/types';
import { fetchFeatureMovieSuccess, fetchFeatureMovieFaile } from './actions';
// import request from './request/index';
import { fetchFeatureMovie } from './fetchFeatureMovie';

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
export default function* watchFetchMovie() {
  // watch action
  yield takeLatest(FETCH_FEATURE_MOVIE, fetchFeatureMovieSlides);
}
