import React from 'react';
import PropTypes from 'prop-types';
// import styles from './Swipe.module.scss';
import { Swipeable } from 'react-swipeable';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';

const Swipe = ({ children }) => (
  <div>
    <Swipeable>
      {children}
      <Button>
        <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
      </Button>
      <Button>
        <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
      </Button>
    </Swipeable>
  </div>
);

Swipe.propTypes = {
  children: PropTypes.node,
};

export default Swipe;
