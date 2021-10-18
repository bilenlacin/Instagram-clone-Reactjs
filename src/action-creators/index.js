import axios from 'axios';
import { bindActionCreators } from 'redux';
import {
  FETCH_POST_ARRAY,
  FETCH_POST_COMPLETE,
  FETCH_POST_ERROR,
  FETCH_STORY_COMPLETE,
  FETCH_STORY_ERROR,
  FETCH_STORY_ARRAY,
  FETCH_SUGGESTION_PROFILE,
  FETCH_SUGGESTION_ERROR,
  FETCH_PROFILE,
  FETCH_PROFILE_ERROR,
  POST_COMMENT,
  INCREASE_POST_LIKE,
  DECREASE_POST_LIKE,
} from '../action-types';

export const fetchPosts = () => {
  return async (dispatch) => {
    //dispatch({ type: FETCH_POST_ARRAY });
    axios
      .get('https://6115020faec65d0017e9dc5e.mockapi.io/instagram')
      .then((response) => {
        dispatch({
          type: FETCH_POST_COMPLETE,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_POST_ERROR,
          payload: error,
        });
      });
  };
};

export const fetchStory = () => {
  return async (dispatch) => {
    //dispatch({ type: FETCH_STORY_ARRAY });
    axios
      .get('https://6115020faec65d0017e9dc5e.mockapi.io/story')
      .then((response) => {
        dispatch({ type: FETCH_STORY_COMPLETE, payload: response.data });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_STORY_ERROR,
          payload: error,
        });
      });
  };
};

export const fetcSuggestions = () => {
  return async (dispatch) => {
    axios
      .get('https://6115020faec65d0017e9dc5e.mockapi.io/suggestions')
      .then((response) => {
        dispatch({ type: FETCH_SUGGESTION_PROFILE, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_SUGGESTION_ERROR, payload: error });
      });
  };
};

export const fetchProfile = () => {
  return async (dispatch) => {
    axios
      .get('https://6115020faec65d0017e9dc5e.mockapi.io/profile')
      .then((response) => {
        dispatch({
          type: FETCH_PROFILE,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_PROFILE_ERROR,
          payload: error,
        });
      });
  };
};

export const insertPostComment = (
  comment,
  postId,
  comments,
  commentQuantity
) => {
  return async (dispatch) => {
    await axios
      .put('https://6115020faec65d0017e9dc5e.mockapi.io/instagram/' + postId, {
        comments: [
          {
            anyInstaUserMessage: comment.commentMsg,
            anyInstaUserName: comment.commenter,
          },
          ...comments,
        ],
        commentQuantity: commentQuantity,
      })
      .then((response) => {
        dispatch({
          type: POST_COMMENT,
          payload: response.data,
        });
      });
  };
};

export const increasePostLike = (postId, counter, liked) => {
  return async (dispatch) => {
    await axios
      .put('https://6115020faec65d0017e9dc5e.mockapi.io/instagram/' + postId, {
        like: counter,
        liked: liked,
      })
      .then((response) => {
        dispatch({
          type: INCREASE_POST_LIKE,
          payload: response.data,
        });
      });
  };
};

export const decreasePostLike = (postId, counter, liked) => {
  return async (dispatch) => {
    await axios
      .put('https://6115020faec65d0017e9dc5e.mockapi.io/instagram/' + postId, {
        like: counter,
        liked: liked,
      })
      .then((response) => {
        dispatch({
          type: DECREASE_POST_LIKE,
          payload: response.data,
        });
      });
  };
};
