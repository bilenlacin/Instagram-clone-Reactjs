import {
  FETCH_STORY_COMPLETE,
  FETCH_SORY_ERROR,
  FETCH_STORY_ARRAY,
} from '../action-types';

const initialState = { stories: [] };
const storyReducer = (state = initialState, action) => {
  switch (action.type) {
    // case FETCH_STORY_ARRAY:
    //   return { story: [] };
    case FETCH_STORY_COMPLETE:
      return { stories: action.payload };
    default:
      return state;
  }
};

export default storyReducer;
