import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBoxPromotion.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';

const ProductBoxPromotion = ({ name, price, stars, image, oldprice }) => (
  <div noHover className={styles.root}>
    <div className={styles.hotDeals}>Hot Deals</div>
    <div className={styles.photo}>
      <img className={styles.image} src={image} alt='Trouble'></img>
      <div className={styles.hotButtons}>
        <Button variant='small'>
          <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
        </Button>
      </div>
      <div className={styles.circleContainer}>
        <div className={styles.circle}>
          <span>25</span>
          <span>DAYS</span>
        </div>
        <div className={styles.circle}>
          <span>10 </span>
          <span>HRS</span>
        </div>
        <div className={styles.circle}>
          <span>45 </span>
          <span>MINS</span>
        </div>
        <div className={styles.circle}>
          <span>30 </span>
          <span>SECS</span>
        </div>
      </div>
    </div>
    <div className={styles.content}>
      <h5>{name}</h5>
      <div className={styles.stars}>
        {[1, 2, 3, 4, 5].map(i => (
          <a key={i} href='#'>
            {i <= stars ? (
              <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
            )}
          </a>
        ))}
      </div>
    </div>
    <div className={styles.line}></div>
    <div className={styles.actions}>
      <div className={styles.outlines}>
        <Button variant={'outline'}>
          <FontAwesomeIcon icon={faEye}>Favorite</FontAwesomeIcon>
        </Button>
        <Button variant={'outline'}>
          <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
        </Button>
        <Button variant={'outline'}>
          <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
        </Button>
      </div>
      <div>
        {oldprice !== 0 && <span className={styles.oldprice}> $ {oldprice}</span>}
      </div>
      <div className={styles.price}>
        <Button noHover variant='small'>
          $ {price}
        </Button>
      </div>
    </div>
  </div>
);

ProductBoxPromotion.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  stars: PropTypes.number,
  image: PropTypes.string,
  oldprice: PropTypes.number,
  HotDeals: PropTypes.number,
};

export default ProductBoxPromotion;
