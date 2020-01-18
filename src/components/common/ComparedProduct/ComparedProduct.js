import React from 'react';
import PropTypes from 'prop-types';
import styles from './ComparedProduct.module.scss';

const ComparedProduct = ({ image }) => (
  <div className={styles.component}>
    <img src={image} alt='comparison-img' />
  </div>
);

ComparedProduct.propTypes = {
  image: PropTypes.string,
};

export default ComparedProduct;
