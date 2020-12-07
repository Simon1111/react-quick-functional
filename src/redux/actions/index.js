import { getBlogPages } from '../../services';
import { FETCH_POSTS_LOAD, FETCH_POSTS_RESOLVE, FETCH_POSTS_REJECT } from '../types';

export const fetchPostsLoad = () => {
  return {
    type: FETCH_POSTS_LOAD,
  };
};

export const fetchPostsResolve = (payload) => { 
  return {
    type: FETCH_POSTS_RESOLVE,
    payload,
  };
};

export const fetchPostsReject = (error) => {
  return {
    type: FETCH_POSTS_REJECT,
    error,
  };
};

export const fetchPosts = () => async (dispatch, getState) => {
  dispatch(fetchPostsLoad());
  try {
    const posts = await getBlogPages();
    dispatch(fetchPostsResolve(posts));
  } catch (error) {
    dispatch(fetchPostsReject(error));
  }
};
