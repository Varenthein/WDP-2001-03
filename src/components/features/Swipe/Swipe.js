import React from 'react';
import PropTypes from 'prop-types';
import styles from './Swipe.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';

const Swipe = ({ children, leftAction, rightAction }) => (
  <div className='row'>
    {children}
    <Button
      className={styles.button}
      onClick={e => {
        e.preventDefault();
        leftAction();
      }}
    >
      <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
    </Button>
    <Button
      className={styles.button}
      onClick={e => {
        e.preventDefault();
        rightAction();
      }}
    >
      <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
    </Button>
  </div>
);

Swipe.propTypes = {
  children: PropTypes.node,
  rightAction: PropTypes.func,
  leftAction: PropTypes.func,
};

export default Swipe;
