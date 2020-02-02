import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';

const ProductList = () => {
  return (
    <div className={styles.root}>
      <div className={styles.banner}>
        <h1 className={styles.heading}>
          bedroom <span>furniture</span>
        </h1>
        <h2 className={styles.subheading}>
          always <span>25%</span> off or more
        </h2>
      </div>
      <div className={styles.breadcumb}>breadcumb</div>
    </div>
  );
};

// ProductList.propTypes = {};

export default ProductList;
