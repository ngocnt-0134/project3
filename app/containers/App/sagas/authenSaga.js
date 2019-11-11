import { call, put, select, takeLatest } from 'redux-saga/effects';

import { makeSelectUser } from '../selectors/authenSelector';
import { FETCH_USER } from '../actions/types';
import { fetchUserSuccess, fetchUserFaile } from '../actions/authen';
import { fetchUser } from '../requests/fetchUser';

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

/**
 * Root saga manages watcher lifecycle
 */
export default function* watchFecthUser() {
  // watch action
  yield takeLatest(FETCH_USER, fetchCurrentUser);
}
