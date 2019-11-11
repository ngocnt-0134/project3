import { createSelector } from 'reselect';

import { initialState } from './reducer';

const selectEditProfileUser = state => state.userNew || initialState;

const makeSelectEditProfileUser = () =>
  createSelector(
    selectEditProfileUser,
    editState => editState.userNew,
  );

export { selectEditProfileUser, makeSelectEditProfileUser };
