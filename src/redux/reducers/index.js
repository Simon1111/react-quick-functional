import { combineReducers } from 'redux';
import { postsReducer } from './posts';

export default combineReducers({
  blogPages: postsReducer
});