import React from 'react';
import PropTypes from 'prop-types';
import styles from './PopUp.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';

const closeWindow = () => {
  document.getElementById('cookies-info').style.display = 'none';
  localStorage.noFirstVisit = true;
};

const PopUp = ({ message }) =>
  !localStorage.noFirstVisit ? (
    <div id='cookies-info' className={styles.component}>
      <p>{message}</p>
      <Button onClick={() => closeWindow()}>
        <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
      </Button>
    </div>
  ) : (
    ''
  );

PopUp.propTypes = {
  message: PropTypes.string,
};

export default PopUp;
