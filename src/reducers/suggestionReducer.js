import {
  FETCH_SUGGESTION_PROFILE,
  FETCH_SUGGESTION_ERROR,
} from '../action-types';

const initialState = { suggestions: [] };

const suggestionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUGGESTION_PROFILE:
      return { suggestions: action.payload };

    default:
      return state;
  }
};

export default suggestionReducer;
