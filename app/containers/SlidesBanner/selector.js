import { createSelector } from 'reselect';
import { initialState } from './reducer';
const selectSlide = state => state.slides || initialState;

const makeSelectSlide = () =>
  createSelector(
    selectSlide,
    headeSlideState => headeSlideState.slides,
  );

export { selectSlide, makeSelectSlide };
