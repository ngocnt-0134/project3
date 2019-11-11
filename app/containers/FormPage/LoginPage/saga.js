import { call, put, select, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { makeSelectLogin } from 'containers/FormPage/LoginPage/selector';
import { LOGIN_AUTH } from './actions/types';
import { loginAuthSuccess, loginAuthFaile } from './actions/index';
// import request from './request/index';
import { loginAuth } from './loginAuth';

export function* loginAccount() {
  // Select movies from store
  const data = yield select(makeSelectLogin());
  try {
    const response = yield call(loginAuth, data);
    yield put(loginAuthSuccess(response, data));
    toast.success('Login success :))', {
      position: toast.POSITION.TOP_RIGHT,
    });
  } catch (err) {
    yield put(loginAuthFaile(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* watchUserLogin() {
  // watch action
  yield takeLatest(LOGIN_AUTH, loginAccount);
}
