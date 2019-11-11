/* eslint-disable no-console */
import produce from 'immer';
import { toast } from 'react-toastify';
import {
  LOGIN_AUTH,
  LOGIN_AUTH_SUCCESS,
  LOGIN_AUTH_FAILE,
} from './actions/types';

// The initial state of the App
export const initialState = {
  data: {},
};
/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN_AUTH:
        draft.data = action.newdata;
        break;
      case LOGIN_AUTH_SUCCESS:
        draft.data = action.response.access_token;
        localStorage.setItem('ACCESS_TOKEN', draft.data);
        window.location = '/?page=1';
        break;
      case LOGIN_AUTH_FAILE:
        toast.error('email or password not correct !', {
          position: toast.POSITION.TOP_RIGHT,
        });

        break;
    }
  });

export default homeReducer;
