/* eslint-disable no-console */
import produce from 'immer';

import {
  FETCH_FEATURE_MOVIE,
  FETCH_FEATURE_MOVIE_FAILE,
  FETCH_FEATURE_MOVIE_SUCCESS,
} from './actions/types';

// The initial state of the App
export const initialState = {
  slides: [],
};

/* eslint-disable default-case, no-param-reassign */
const slidesReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_FEATURE_MOVIE:
        console.log('Dang tai slides');
        break;
      case FETCH_FEATURE_MOVIE_SUCCESS:
        draft.slides = action.repos;
        break;
      case FETCH_FEATURE_MOVIE_FAILE:
        console.log('Tải dữ liệu thất bại');
        break;
    }
  });

export default slidesReducer;
