import { call, put, select, takeLatest } from 'redux-saga/effects';

import { makeSelectRegister } from 'containers/FormPage/RegisterPage/selector';
import { REGISTER } from './actions/types';
import { registerSuccess, registerFaile } from './actions/index';
// import request from './request/index';
import { registerUser } from './registerPost';

export function* registerAccount() {
  // Select movies from store
  const data = yield select(makeSelectRegister());

  try {
    const repos = yield call(registerUser(data));
    yield put(registerSuccess(repos, data));
  } catch (err) {
    yield put(registerFaile(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* watchRegisterUser() {
  // watch action
  yield takeLatest(REGISTER, registerAccount);
}
