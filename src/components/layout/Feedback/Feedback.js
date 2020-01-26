import React from 'react';
// import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

import styles from './Feedback.module.scss';

const Feedback = props => (
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
    </div>
  </div>
);

// Feedback.propTypes = {};

export default Feedback;
