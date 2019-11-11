/* eslint-disable no-console */
import produce from 'immer';
import {
  FETCH_MOVIE,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAILE,
  SEARCH_MOVIE,
  SEARCH_MOVIE_SUCCESS,
  SEARCH_MOIVE_FAILE,
} from './actions/type';

// The initial state of the App
export const initialState = {
  movies: [],
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_MOVIE:
        console.log('Dang tai');
        break;
      case FETCH_MOVIE_SUCCESS:
        draft.movies = action.repos.data;
        break;
      case FETCH_MOVIE_FAILE:
        console.log('Tải dữ liệu thất bại');
        break;
      // SEARCH
      case SEARCH_MOVIE:
        console.log('Dang tim');
        break;
      case SEARCH_MOVIE_SUCCESS:
        console.log(action);
        draft.movies = action.repos;
        break;
      case SEARCH_MOIVE_FAILE:
        console.log("Can't found firm with value ");
        break;
    }
  });

export default homeReducer;
