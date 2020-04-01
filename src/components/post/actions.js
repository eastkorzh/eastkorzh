import * as AT from './action-types';

export const likePost = ({ index }) => ({
  type: AT.LIKE_POST,
  payload: {
    index,
  }
});

export const unlikePost = ({ index }) => ({
  type: AT.UNLIKE_POST,
  payload: {
    index,
  }
});

export const deletePost = ({ index }) => ({
  type: AT.DELETE_POST,
  payload: {
    index,
  }
});
