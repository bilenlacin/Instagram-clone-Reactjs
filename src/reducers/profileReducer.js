import { stat } from 'fs';
import { initial } from 'lodash';
import { FETCH_PROFILE, FETCH_PROFILE_ERROR } from '../action-types';

const initialState = { profile: [] };

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILE:
      return { profile: action.payload };
    default:
      return state;
  }
};

export default profileReducer;
