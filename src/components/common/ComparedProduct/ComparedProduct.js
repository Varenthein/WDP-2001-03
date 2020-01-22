import React from 'react';
import PropTypes from 'prop-types';
import styles from './ComparedProduct.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';

const ComparedProduct = ({ image, removeFromCompare }) => (
  <div className={styles.component}>
    <img src={image} alt='comparison-img' />
    <div className={styles.imageHover}>
      <Button onClick={() => removeFromCompare()}>
        <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
      </Button>
    </div>
  </div>
);

ComparedProduct.propTypes = {
  image: PropTypes.string,
  removeFromCompare: PropTypes.func,
};

export default ComparedProduct;
