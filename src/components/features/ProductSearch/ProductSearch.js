import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductSearch.module.scss';

const ProductSearch = () => {
  const mql = window.matchMedia('(max-width: 767px)');
  let mobile = false;
  if (mql.matches) mobile = true;
  return (
    <div className={mobile ? styles.wrapMd : ''}>
      <form action='' className={styles.root + ' ' + (mobile ? styles.mobile : '')}>
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
            <li className={styles.active}>
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
    </div>
  );
};

ProductSearch.propTypes = {
  children: PropTypes.node,
};

export default ProductSearch;
