import {
  UPDATE_PROFILE_USER,
  UPDATE_PROFILE_USER_FAILE,
  UPDATE_PROFILE_USER_SUCCESS,
} from './types';

export function updateUser(data) {
  return {
    type: UPDATE_PROFILE_USER,
    data,
  };
}

export function updateUserSuccess(repos, data) {
  return {
    type: UPDATE_PROFILE_USER_SUCCESS,
    repos,
    data,
  };
}

export function updateUserFaile(error) {
  return {
    type: UPDATE_PROFILE_USER_FAILE,
    error,
  };
}
