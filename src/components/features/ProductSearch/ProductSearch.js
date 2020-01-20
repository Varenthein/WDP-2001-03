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
          <select name='' id=''>
            <option value=''>Select a category</option>
          </select>
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
