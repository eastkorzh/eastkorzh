import React from 'react';

import SubredditList from './components/subredditList';
import PostsList from './components/postsList';

import './styles/index.css';

const App = () => {
  return (
    <div className='app'>
      <SubredditList />
      <PostsList />
    </div>
  )
}

export default App;
