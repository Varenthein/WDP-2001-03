import React from 'react';
import styles from './SortBy.modules.scss';

const SortBy = () => (
  <container className={styles.sortBy}>
    <p>Sort By</p>
    <select>
      <option selected value='Price: Lowest first'>
        Price: Lowest first
      </option>
      <option value='Price: Highest first'>Price: Highest first</option>
    </select>
  </container>
);

export default SortBy;
