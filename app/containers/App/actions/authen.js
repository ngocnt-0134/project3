import { FETCH_USER, FETCH_USER_FAILE, FETCH_USER_SUCCESS } from './types';

export function fetchUser() {
  return {
    type: FETCH_USER,
  };
}

export function fetchUserSuccess(repos, user) {
  return {
    type: FETCH_USER_SUCCESS,
    repos,
    user,
  };
}

export function fetchUserFaile(error) {
  return {
    type: FETCH_USER_FAILE,
    error,
  };
}
