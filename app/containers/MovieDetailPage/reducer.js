/* eslint-disable no-console */
import produce from 'immer';
import {
  FETCH_MOVIE_BY_ID,
  FETCH_MOVIE_BY_ID_SUCCESS,
  FETCH_MOVIE_BY_ID_FAILE,
  GET_BOOKING_ABLE,
  GET_BOOKING_ABLE_SUCCSESS,
  GET_BOOKING_ABLE_FAILE,
} from './actions/types';

export const initialState = {
  movie: {},
};

/* eslint-disable default-case, no-param-reassign */
const movieDetail = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_MOVIE_BY_ID:
        break;
      case FETCH_MOVIE_BY_ID_SUCCESS:
        draft.movie = action.repos;
        break;
      case FETCH_MOVIE_BY_ID_FAILE:
        console.log(action.error);
        break;
      // Get info seat
      case GET_BOOKING_ABLE:
        break;
      case GET_BOOKING_ABLE_SUCCSESS:
        draft.info = JSON.parse(action.repos.available_seat);
        break;
      case GET_BOOKING_ABLE_FAILE:
        console.log('Load Seat faile');
        break;
    }
  });

export default movieDetail;
