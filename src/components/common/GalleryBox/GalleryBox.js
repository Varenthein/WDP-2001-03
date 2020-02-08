import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import styles from '../../features/Gallery/Gallery.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../../common/Button/Button';

const GalleryBox = ({
  id,
  name,
  price,
  oldprice,
  stars,
  promo,
  newFurniture,
  favorite,
  image,
}) => {
  return (
    <div className={styles.product}>
      <img src={image} alt='product 1' />
      <div className={styles.buttons}>
        <ReactTooltip type='light' place='right' />
        <Button variant='gallery' data-tip='Add to favorites'>
          <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
        </Button>
        <Button variant='gallery' data-tip='Add to compare'>
          <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
        </Button>
        <Button variant='gallery' data-tip='View details'>
          <FontAwesomeIcon icon={faEye}>View details</FontAwesomeIcon>
        </Button>
        <Button variant='gallery' data-tip='Add to basket'>
          <FontAwesomeIcon icon={faShoppingBasket}>Add to basket</FontAwesomeIcon>
        </Button>
      </div>
      <div className={styles.content}>
        <div className={styles.triangleTopLeft} />
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
        <div className={styles.triangleBottomRight} />
        <div className={styles.price}>
          <h3>${price}</h3>
          <h5>${oldprice}</h5>
        </div>
      </div>
    </div>
  );
};

GalleryBox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  favorite: PropTypes.bool,
  image: PropTypes.string,
  oldprice: PropTypes.number,
  newFurniture: PropTypes.bool,
};

export default GalleryBox;
