import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
import SortBy from '../../features/SortBy/SortBy';
import Show from '../../features/Show/Show';

const ProductList = () => (
  <div className={styles.root}>
    <h3>FURNITURE</h3>
    <SortBy />
    <Show />
  </div>
);
// ProductList.propTypes = {};

export default ProductList;
