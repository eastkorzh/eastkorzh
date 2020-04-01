import React from 'react';

import Subreddit from '../subreddit';

import s from './styles.module.scss';

const SubredditList = () => {
  return (
    <div className={s.container}>
      <Subreddit name='Frontend' />
      <Subreddit name='ReactJS' />
      <Subreddit name='VueJS' />
      <Subreddit name='Angular' />
    </div>
  )
}

export default SubredditList;
