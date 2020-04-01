import React from 'react';

import Subreddit from '../subreddit';

import s from './styles.module.scss';

const SubredditList = () => {
  return (
    <div className={s.container}>
      <Subreddit name='Frontend' route='frontend'/>
      <Subreddit name='ReactJS' route='reactjs'/>
      <Subreddit name='VueJS' route='vuejs'/>
      <Subreddit name='Angular' route='angular'/>
    </div>
  )
}

export default SubredditList;
