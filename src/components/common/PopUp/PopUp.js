import React from 'react';
import PropTypes from 'prop-types';
import styles from './PopUp.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';

const PopUp = ({ message }) => (
  <div className={styles.component}>
    <p>{message}</p>
    <Button>
      <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
    </Button>
  </div>
);

PopUp.propTypes = {
  message: PropTypes.string,
};

export default PopUp;
