import React from 'react';

import s from './styles.module.scss';

const Post = (props) => {
  const { url='/', title, index, isLiked } = props;
  const { likePost, unlikePost, deletePost } = props;

  const handleLike = () => {
    if (isLiked) {
      unlikePost({ index });
    } else {
      likePost({ index });
    }
  }

  return (
    <div className={s.container}>
      <div className={s.buttonsWrapper}>
        <div 
          className={s.button} 
          onClick={handleLike}
        >
          {isLiked ? 
            <img src={require('../../img/unlike.svg')} alt=""/>:
            <img src={require('../../img/like.svg')} alt=""/>
          }
        </div>
        <div 
          className={s.button} 
          onClick={() => deletePost({ index })}
        >
          <img src={require('../../img/delete.svg')} alt=""/>
        </div>
      </div>
      <a href={url} target='_blank' rel="noopener noreferrer">{title}</a>
    </div>
  )
}

export default Post;
