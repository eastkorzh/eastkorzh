import React from 'react';

import Post from '../post';
import s from './styles.module.scss';

const PostsList = (props) => {
  const { posts, isFetching } = props;

  return (
    <div className={s.container}>
      {!!posts.length && posts.map((item, index) => {
        const { id, title, url } = item.data;

        return(
          <Post 
            key={id+index} 
            index={index} 
            title={title} 
            url={url}
            isLiked={item.isLiked}
          />
        )
      })}
      {isFetching &&
        <div>...</div>
      }
    </div>
  )
}

export default PostsList;
