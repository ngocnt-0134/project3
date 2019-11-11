import {
  call,
  put,
  select,
  takeLatest,
  all,
  delay,
  takeEvery,
} from 'redux-saga/effects';

import { makeSelectMovies } from 'containers/HomePage/selectors';
import { FETCH_MOVIE, SEARCH_MOVIE } from './actions/type';
import {
  fetchMovieSuccess,
  fetchMovieFaile,
  searchMovieSuccess,
  searchMovieFaile,
} from './actions/index';
// import request from './request/index';
import { fetchMovieList } from './request/fetchMovie';
import { searchMovie } from './request/searchMovie';
export function* fetchMovieAction({ page }) {
  // Select movies from store
  const query = page ? page.search : '';
  const movies = yield select(makeSelectMovies());
  try {
    const repos = yield call(fetchMovieList, query);
    yield put(fetchMovieSuccess(repos, movies));
  } catch (err) {
    yield put(fetchMovieFaile(err));
  }
}
export function* searchMoiveAction({ txt }) {
  // console.log(txt.search);
  yield delay(400);
  const movies = yield select(makeSelectMovies());
  try {
    const repos = yield call(searchMovie, txt.search);
    yield put(searchMovieSuccess(repos, movies));
  } catch (err) {
    yield put(searchMovieFaile(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* watchFetchMovie() {
  // watch action
  yield all([
    takeEvery(FETCH_MOVIE, fetchMovieAction),
    takeLatest(SEARCH_MOVIE, searchMoiveAction),
  ]);
}
