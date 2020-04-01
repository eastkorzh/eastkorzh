import React from 'react';

import s from './styles.module.scss';

const Subreddit = (props) => {
  const { name } = props;

  return(
    <div className={s.container}>
      <div className={s.button}>
        {name}
      </div>
    </div>
  )
}

export default Subreddit;
