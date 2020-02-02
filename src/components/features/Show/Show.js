import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faThList } from '@fortawesome/free-solid-svg-icons';

import styles from './Show.module.scss';

const Show = () => (
  <div className={styles.show}>
    <p>Show</p>
    <select>
      <option selected value='14'>
        14
      </option>
      <option value='8'>8</option>
      <option value='4'>4</option>
    </select>
    <div className={styles.icons}>
      <FontAwesomeIcon className={styles.icon} icon={faThLarge} />
      <p />
      <FontAwesomeIcon className={styles.icon} icon={faThList} />
    </div>
  </div>
);

Show.propTypes = {
  children: PropTypes.node,
};

export default Show;
