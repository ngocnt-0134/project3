import { REGISTER, REGISTER_FAILE, REGISTER_SUCCESS } from './types';

// export const register = (name, email, password) => ({
//   type: REGISTER,
//   name,
//   email,
//   password,
// });
export function register(newdata) {
  return {
    type: REGISTER,
    newdata,
  };
}

export function registerSuccess(repos, data) {
  return {
    type: REGISTER_SUCCESS,
    repos,
    data,
  };
}
export function registerFaile(error) {
  return {
    type: REGISTER_FAILE,
    error,
  };
}
