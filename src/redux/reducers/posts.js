import { FETCH_POSTS_LOAD, FETCH_POSTS_RESOLVE, FETCH_POSTS_REJECT } from '@/redux/types';

export const postsReducer = (state, action) => {
  switch (action.type) {
    case FETCH_POSTS_LOAD:
      return {
        ...state,
        error: null
      };
      
    case FETCH_POSTS_RESOLVE:
      return {
        error: null,
        payload: action.payload || [],
      };

    case FETCH_POSTS_REJECT:
      return {
        error: action.error,
        payload: null,
      };

    default:
      return {
        error: null,
        payload: null,
      };
  }
};