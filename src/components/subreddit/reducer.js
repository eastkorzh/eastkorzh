import * as AT from './action-types';

const initialState = {
  isFetching: false,
  posts: [],
  postsCache: {
    frontend: [],
  },
  error: null,
}

export default (state = { ...initialState }, action) => {
  switch(action.type) {
    case AT.GET_RANDOM_POSTS:
      return {
        ...state,
        isFetching: true,
      }
      
    case AT.GET_RANDOM_POSTS_SUCCESS: {
      const { route, result, expireTime } = action.payload;
      return {
        ...state,
        isFetching: false,
        postsCache: {
          ...state.postsCache,
          [route]: {
            posts: result,
            expireTime,
          },
        }
      }
    }

    case AT.GET_RANDOM_POSTS_FAIL: {
      const { message } = action.payload;

      return {
        ...state,
        isFetching: false,
        error: message,
      }
    }

    case AT.PUSH_RANDOM_POST_TO_THE_LIST: {
      const { post } = action.payload;
      return {
        ...state,
        isFetching: false,
        posts: [...state.posts, post],
      }
    }
    
    default:
      return state;
  }
}
