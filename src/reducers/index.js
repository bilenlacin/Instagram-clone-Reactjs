import { combineReducers } from 'redux';
import postReducer from './postReducer';
import storyReducer from './storyReducer';
import suggestionReducer from './suggestionReducer';
import profileReducer from './profileReducer';
const reducers = combineReducers({
  postReducer,
  storyReducer,
  suggestionReducer,
  profileReducer,
});

export default reducers;
