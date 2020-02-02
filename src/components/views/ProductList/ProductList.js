import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
import Banner from '../../layout/Banner/Banner';

const ProductList = () => {
  return (
    <div className={styles.root}>
      <Banner />
      <div className={styles.breadcumb}>breadcumb</div>
    </div>
  );
};

// ProductList.propTypes = {};

export default ProductList;
