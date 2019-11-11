/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

import { initialState } from './reducer';

const selectHome = state => state.movies || initialState;

const makeSelectMovies = () =>
  createSelector(
    selectHome,
    homeState => homeState.movies,
  );

export { selectHome, makeSelectMovies };
