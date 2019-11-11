/* eslint-disable no-console */
import produce from 'immer';
// import { toast } from 'react-toastify';
import { REGISTER, REGISTER_SUCCESS, REGISTER_FAILE } from './actions/types';

// The initial state of the App
export const initialState = {
  data: [],
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case REGISTER:
        draft.data = action.newdata;
        break;
      case REGISTER_SUCCESS:
        console.log(action);
        draft.data = action.repos.data;
        break;
      case REGISTER_FAILE:
        break;
    }
  });

export default homeReducer;
