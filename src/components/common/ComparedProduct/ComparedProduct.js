import React from 'react';
import PropTypes from 'prop-types';
import styles from './ComparedProduct.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';

const ComparedProduct = ({ image }) => (
  <div className={styles.component}>
    <img src={image} alt='comparison-img' />
    <div className={styles.imageHover}>
      <Button>
        <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
      </Button>
    </div>
  </div>
);

ComparedProduct.propTypes = {
  image: PropTypes.string,
};

export default ComparedProduct;
