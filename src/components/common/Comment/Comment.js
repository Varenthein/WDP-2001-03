import React from 'react';
import PropTypes from 'prop-types';

import styles from './Comment.module.scss';

const Comment = ({ name, description, image, comment }) => (
  <div className={styles.root}>
    <p>{comment}</p>
    <div className={styles.caption}>
      <div className={styles.image}>
        <img src={image} alt='client' />
      </div>
      <div className={styles.name}>
        <p>
          <strong>{name}</strong>
        </p>
        <p>{description}</p>
      </div>
    </div>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string,
  comment: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
};

export default Comment;
