import React from 'react';
import PropTypes from 'prop-types';
// import styles from './Swipeable.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';

const Swipeable = () => (
  <div>
    <Button>
      <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
    </Button>
    <Button>
      <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
    </Button>
  </div>
);

Swipeable.propTypes = {};

export default Swipeable;
