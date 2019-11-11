import { createSelector } from 'reselect';
import { initialState } from '../reducers/userReducer';
const selectUser = state => state.user || initialState;

const makeSelectUser = () =>
  createSelector(
    selectUser,
    userState => userState.user,
  );

export { selectUser, makeSelectUser };
