/* eslint-disable no-console */
import produce from 'immer';
import {
  BOOKING_MOVIE,
  BOOKING_MOVIE_FAILE,
  BOOKING_MOVIE_SUCCSESS,
} from './actions/types';

export const initialState = {
  book: {},
};

/* eslint-disable default-case, no-param-reassign */
const bookingReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case BOOKING_MOVIE:
        draft.data = action.data;
        break;
      case BOOKING_MOVIE_SUCCSESS:
        draft.book = action.repos.data;
        break;
      case BOOKING_MOVIE_FAILE:
        console.log(action.error);
        break;
    }
  });

export default bookingReducer;
