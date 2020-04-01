import * as AT from './action-types';

export const getRandomPosts = ({ route }) => ({
  type: AT.GET_RANDOM_POSTS,
  payload: {
    route,
  }
});

export const getRandomPostsSuccess = ({ route, result, expireTime }) => ({
  type: AT.GET_RANDOM_POSTS_SUCCESS,
  payload: {
    route,
    result,
    expireTime,
  }
});

export const getRandomPostsFail = ({ route, message }) => ({
  type: AT.GET_RANDOM_POSTS_FAIL,
  payload: {
    route,
    message,
  }
});

export const pushRandomPostsToTheList = ({ post }) => ({
  type: AT.PUSH_RANDOM_POST_TO_THE_LIST,
  payload: {
    post,
  }
});
