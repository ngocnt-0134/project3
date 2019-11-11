import { call, put, select, takeLatest } from 'redux-saga/effects';

import { makeSelectEditProfileUser } from './selector';
import { UPDATE_PROFILE_USER } from './actions/types';
import { updateUserFaile, updateUserSuccess } from './actions/index';
// import request from './request/index';
import { updateUser } from './updateUser';

export function* updateProfileUserAction({ data }) {
  const userNew = yield select(makeSelectEditProfileUser());
  try {
    const repos = yield call(updateUser, data);
    yield put(updateUserSuccess(repos, userNew));
  } catch (err) {
    yield put(updateUserFaile(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* watchUpdateUser() {
  // watch action
  yield takeLatest(UPDATE_PROFILE_USER, updateProfileUserAction);
}
