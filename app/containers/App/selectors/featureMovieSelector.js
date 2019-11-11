import { createSelector } from 'reselect';
import { initialState } from '../reducers/featureMovieReducer';
const selectSlide = state => state.slides || initialState;

const makeSelectSlide = () =>
  createSelector(
    selectSlide,
    headeSlideState => headeSlideState.slides,
  );

export { selectSlide, makeSelectSlide };
