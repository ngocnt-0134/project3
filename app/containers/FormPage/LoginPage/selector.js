import { createSelector } from 'reselect';
import { initialState } from './reducer';
const selectLogin = state => state.login || initialState;

const makeSelectLogin = () =>
  createSelector(
    selectLogin,
    loginState => loginState.data,
  );

export { selectLogin, makeSelectLogin };
