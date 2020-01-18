import React from 'react';
import PropTypes from 'prop-types';
import styles from './StickyBar.module.scss';

import Button from '../../common/Button/Button';
import ComparedProduct from '../../common/ComparedProduct/ComparedProduct';

const StickyBar = ({ comparison }) =>
  comparison.length > 0 ? (
    <div className={styles.component}>
      <div>
        {comparison.map(productData => (
          <ComparedProduct key={productData.id} {...productData} />
        ))}
      </div>
      <Button className={styles.button}>Compare</Button>
    </div>
  ) : (
    ''
  );

StickyBar.propTypes = {
  comparison: PropTypes.array,
};

export default StickyBar;
