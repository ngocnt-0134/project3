import { LOGIN_AUTH, LOGIN_AUTH_SUCCESS, LOGIN_AUTH_FAILE } from './types';

export function loginAuth(newdata) {
  return {
    type: LOGIN_AUTH,
    newdata,
  };
}

export function loginAuthSuccess(response, data) {
  return {
    type: LOGIN_AUTH_SUCCESS,
    response,
    data,
  };
}
export function loginAuthFaile(error) {
  return {
    type: LOGIN_AUTH_FAILE,
    error,
  };
}
