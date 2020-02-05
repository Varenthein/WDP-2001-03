import React from 'react';
import PropTypes from 'prop-types';
import styles from './Brands.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const moveleft = () => {
  const swipable = document.querySelector(styles.swipable);
  if (swipable.classList.contains(styles.movedLeft)) {
    swipable.classList.remove(styles.movedLeft);
  }
  swipable.classList.add(styles.movedLeft);
};

const Brands = ({ brands }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className={styles.wrapper}>
        <div className={styles.slide} onClick={e => moveleft()}>
          <FontAwesomeIcon className={styles.icon} icon={faAngleLeft} />
        </div>
        <div className={styles.brandsWrapper}>
          <div className={styles.swipable}>
            {brands.map(brand => (
              <div className={styles.brand} key={brand.key} {...brand}>
                <img src={brand.image} alt='brand' />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.slide}>
          <FontAwesomeIcon className={styles.icon} icon={faAngleRight} />
        </div>
      </div>
    </div>
  </div>
);

Brands.propTypes = {
  image: PropTypes.node,
  brands: PropTypes.array,
};
export default Brands;
