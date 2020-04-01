import React from 'react';

import s from './styles.module.scss';

const Subreddit = (props) => {
  const { name, route } = props;
  const { getRandomPosts } = props;

  const hadleClick = () => {
    getRandomPosts({ route });
  }

  return(
    <div className={s.container}>
      <div className={s.button} onClick={hadleClick}>
        {name}
      </div>
    </div>
  )
}

export default Subreddit;
