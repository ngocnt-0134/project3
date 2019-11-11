/* eslint-disable no-console */
import produce from 'immer';
import {
  FETCH_USER_FAILE,
  FETCH_USER_SUCCESS,
  FETCH_USER,
} from '../actions/types';

// The initial state of the App
export const initialState = {
  user: {},
};

/* eslint-disable default-case, no-param-reassign */
const profileReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_USER:
        console.log(action);
        break;
      case FETCH_USER_SUCCESS:
        draft.user = action.repos;
        break;
      case FETCH_USER_FAILE:
        console.log('Lay that bai');
        break;
    }
  });

export default profileReducer;
