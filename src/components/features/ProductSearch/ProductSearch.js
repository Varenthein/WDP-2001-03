import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductSearch.module.scss';

const ProductSearch = () => (
  <form action='' className={styles.root}>
    <div className={styles.category}>
      <FontAwesomeIcon className={styles.icon} icon={faListUl} />
      <ul className={styles.list}>
        <li className={styles.defaulta}>
          <a value='Select a category'>Select a category</a>
        </li>
        <li className={styles.active}>
          <a value=''>Furniture</a>
        </li>
        <li className={styles.active}>
          <a value=''>Chair</a>
        </li>
        <li className={styles.active} activeClassName={styles.ActiveLink}>
          <a value=''>Table</a>
        </li>
        <li className={styles.active}>
          <a value=''>Sofa</a>
        </li>
        <li className={styles.active}>
          <a value=''>Bedroom</a>
        </li>
        <li className={styles.active}>
          <a value=''>Blog</a>
        </li>
      </ul>
      <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
    </div>
    <div className={styles.searchField}>
      <input placeholder='Search products...' type='text' />
      <button>
        <FontAwesomeIcon className={styles.icon} icon={faSearch} />
      </button>
    </div>
  </form>
);

ProductSearch.propTypes = {
  children: PropTypes.node,
};

export default ProductSearch;
