import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

import Comment from '../../common/Comment/Comment';

import styles from './Feedback.module.scss';

const Feedback = ({ feedback }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <div className={styles.heading}>
            <h3>Client Feedback</h3>
          </div>
        </div>
      </div>
      <div className='col-12'>
        <FontAwesomeIcon icon={faQuoteRight} />
      </div>
      {feedback.map(comment => (
        <Comment key={feedback.indexOf(comment)} {...comment} />
      ))}
    </div>
  </div>
);

Feedback.propTypes = {
  feedback: PropTypes.array,
};

export default Feedback;
