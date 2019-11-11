/* eslint-disable no-console */
import produce from 'immer';
import { toast } from 'react-toastify';
import {
  UPDATE_PROFILE_USER,
  UPDATE_PROFILE_USER_SUCCESS,
  UPDATE_PROFILE_USER_FAILE,
} from './actions/types';

// The initial state of the App
export const initialState = {
  userNew: {},
};

/* eslint-disable default-case, no-param-reassign */
const updateProfileReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case UPDATE_PROFILE_USER:
        console.log('Dang tai');
        draft.userNew = action.data;
        break;
      case UPDATE_PROFILE_USER_SUCCESS:
        toast.success('Update success', {
          position: toast.POSITION.TOP_RIGHT,
        });
        draft.userNew = action.repos.data;
        break;
      case UPDATE_PROFILE_USER_FAILE:
        toast.error('Update faile something wrong', {
          position: toast.POSITION.TOP_RIGHT,
        });

        break;
    }
  });

export default updateProfileReducer;
