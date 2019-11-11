import { createSelector } from 'reselect';
import { initialState } from './reducer';
const selectUser = state => state.user || initialState;

const makeSelectUser = () =>
  createSelector(
    selectUser,
    userState => userState.user,
  );

export { selectUser, makeSelectUser };

// Fetch Feature
const selectSlide = state => state.slides || initialState;

const makeSelectSlide = () =>
  createSelector(
    selectSlide,
    headeSlideState => headeSlideState.slides,
  );

export { selectSlide, makeSelectSlide };
