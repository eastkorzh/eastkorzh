import { takeLatest, call, put } from 'redux-saga/effects';

function* getRandomPost() {
  yield null
}

function* watchGetRandomPost() {
  yield takeLatest('LOL', getRandomPost)
}

const subreddit = [
  watchGetRandomPost,
]

export default subreddit;
