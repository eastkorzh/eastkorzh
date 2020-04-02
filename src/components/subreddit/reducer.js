import * as AT from './action-types';

import * as POST_AT from '../post/action-types';

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
      // После того как получил посты для конкретного subreddit (здесь - route),
      // кеширую из в postsCache
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
      post.isLiked = false;

      return {
        ...state,
        isFetching: false,
        posts: [...state.posts, post],
      }
    }

    // Post actions
    case POST_AT.LIKE_POST: {
      const { index } = action.payload;

      return {
        ...state,
        // Для больших объемов данных массив использовать не эффективно, а
        // лучше испльзовать Linked List, но здесь уместен и массив.
        posts: state.posts.map((item, i) => {
          if (i === index) {
            return {
              ...item,
              isLiked: true,
            }
          } else return item
        })
      }
    }

    case POST_AT.UNLIKE_POST: {
      const { index } = action.payload;

      return {
        ...state,
        posts: state.posts.map((item, i) => {
          if (i === index) {
            return {
              ...item,
              isLiked: false,
            }
          } else return item
        })
      }
    }

    case POST_AT.DELETE_POST: {
      const { index } = action.payload;

      return {
        ...state,
        // Особенно эффективно использовать Linked List в данной операции
        posts: state.posts.filter((item, i) => {
          if (i !== index) return item;
          return null;
        })
      }
    }

    default:
      return state;
  }
}
