import { createSelector } from 'reselect';
import { initialState } from './reducer';
const selectRegister = state => state.register || initialState;

const makeSelectRegister = () =>
  createSelector(
    selectRegister,
    registerState => registerState.data,
  );

export { selectRegister, makeSelectRegister };
