import {
  FETCH_POST_ARRAY,
  FETCH_POST_COMPLETE,
  FETCH_POST_ERROR,
  INCREASE_POST_LIKE,
  POST_COMMENT,
  DECREASE_POST_LIKE,
} from '../action-types';

const initialState = { posts: [] };

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_ARRAY:
      return { posts: [] };
    case FETCH_POST_COMPLETE:
      return { posts: action.payload };
    case POST_COMMENT: {
      return {
        posts: [
          ...state.posts.map((post) => {
            if (post.id === action.payload.id) {
              return (post = action.payload);
            } else return post;
          }),
        ],
      };
    }
    case INCREASE_POST_LIKE:
      return {
        posts: [
          ...state.posts.map((post) => {
            if (post.id === action.payload.id) {
              return (post = action.payload);
            } else return post;
          }),
        ],
      };
    case DECREASE_POST_LIKE:
      return {
        posts: [
          ...state.posts.map((post) => {
            if (post.id === action.payload.id) {
              return (post = action.payload);
            } else return post;
          }),
        ],
      };
    default:
      return state;
  }
};

export default postReducer;
