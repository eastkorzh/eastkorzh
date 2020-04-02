import { takeLatest, call, put, select } from 'redux-saga/effects';

import * as AT from './action-types';
import * as actions from './actions';
import { get } from '../../api';

function* getRandomPost({
  payload: { 
    route,
  },
}) {
  try {
    const cachedSubreddit = yield select(state => state.subreddit.postsCache[route]);

    let posts = cachedSubreddit && cachedSubreddit.posts;
    let expireTime = cachedSubreddit && cachedSubreddit.expireTime;

    // Проверям, валиден ли кэш (валиден в течении 2мин даже после перезагрузкив)
    const isExpired = !expireTime || ((expireTime - new Date().getTime()) <= 0);

    // Если нет постов в кэше или он больше не валиден, запрашиваем новые посты
    if (!posts || !posts.length || isExpired ) {
      const { data: { children } } = yield call(get, { 
        url: `https://www.reddit.com/r/${route}.json`
      });

      posts = children;

      // Кэшируем посты
      yield put(actions.getRandomPostsSuccess({ 
        route, 
        result: children,
        // устанавливаем время, когда кэш станет невалидным
        expireTime: new Date().getTime() + 120000,
      }));
    }

    // Берем рандомный пост из кэша, который мы обновили только что, либо менее 2мин назад
    const randomIndex = Math.floor(Math.random() * (posts.length - 1));

    const randomPost = yield select(state => state.subreddit.postsCache[route].posts[randomIndex]);

    yield put(actions.pushRandomPostsToTheList({ post: randomPost }));

  } catch (error) {
    yield put(actions.getRandomPostsFail({ message: error.message }))
  }
}

function* watchGetRandomPost() {
  yield takeLatest(AT.GET_RANDOM_POSTS, getRandomPost)
}

const subreddit = [
  watchGetRandomPost,
]

export default subreddit;
