import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
import Banner from '../../layout/Banner/Banner';
import Breadcrumb from '../../common/Breadcrumb/Breadcrumb';

const breadcumbLinks = [
  { id: 'home', label: 'Home' },
  { id: 'furniture', label: 'Furniture' },
];

const ProductList = () => {
  return (
    <div className={styles.root}>
      <Banner />
      <Breadcrumb>
        {breadcumbLinks.map(el => (
          <a key={el.id}>{el.label}</a>
        ))}
      </Breadcrumb>
    </div>
  );
};

// ProductList.propTypes = {};

export default ProductList;
