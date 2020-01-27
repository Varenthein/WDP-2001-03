import React from 'react';
import PropTypes from 'prop-types';

// import styles from './Comment.module.scss';

const Comment = ({ name, description, image, comment }) => (
  <div>
    <p>{comment}</p>
    <div>
      <div>
        <img src={image} alt='client' />
      </div>
      <span>
        <strong>{name}</strong>
        <br />
        {description}
      </span>
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
