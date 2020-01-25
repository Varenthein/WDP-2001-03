import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import styles from './Gallery.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../../common/Button/Button';

class Gallery extends React.Component {
  state = {
    activeTab: 'featured',
  };

  handleTabChange(newTab) {
    this.setState({ activeTab: newTab });
    console.log('state', newTab);
  }

  render() {
    const { products } = this.props;
    const { activeTab } = this.state;
    const categories = [
      { id: 'featured', name: 'featured' },
      { id: 'topSeller', name: 'top seller' },
      { id: 'saleOff', name: 'sale off' },
      { id: 'topRated', name: 'top rated' },
    ];

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <div className={styles.heading}>
                <h3>Furniture gallery</h3>
              </div>
              <div className={styles.menu}>
                <ul>
                  {categories.map(el => (
                    <li key={el.id}>
                      <a
                        className={el.id === activeTab && styles.active}
                        onClick={() => {
                          this.handleTabChange(el.id);
                        }}
                      >
                        {el.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.product}>
                <img src={products[0].image} alt='product 1' />
                <div className={styles.buttons}>
                  <ReactTooltip type='light' place='right' />
                  <Button variant='gallery' data-tip='Add to favorites'>
                    <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
                  </Button>
                  <Button variant='gallery' data-tip='Add to compare'>
                    <FontAwesomeIcon icon={faExchangeAlt}>
                      Add to compare
                    </FontAwesomeIcon>
                  </Button>
                  <Button variant='gallery' data-tip='View details'>
                    <FontAwesomeIcon icon={faEye}>View details</FontAwesomeIcon>
                  </Button>
                  <Button variant='gallery' data-tip='Add to basket'>
                    <FontAwesomeIcon icon={faShoppingBasket}>
                      Add to basket
                    </FontAwesomeIcon>
                  </Button>
                </div>
                <div className={styles.content}>
                  <div className={styles.triangleTopLeft} />
                  <h5>{products[0].name}</h5>
                  <div className={styles.stars}>
                    {[1, 2, 3, 4, 5].map(i => (
                      <a key={i} href='#'>
                        {i <= products[0].stars ? (
                          <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                        ) : (
                          <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
                        )}
                      </a>
                    ))}
                  </div>
                  <div className={styles.triangleBottomRight} />
                  <div className={styles.price}>
                    <h3>${products[0].price}</h3>
                    <h5>${products[0].oldprice}</h5>
                  </div>
                </div>
              </div>
              <div className={styles.slider}>
                <Button className={styles.prev}>
                  <p>{'<'}</p>
                </Button>
                <div className={styles.slides}>
                  <img
                    src={products[0].image}
                    alt='pic'
                    className={styles.slidePic + ' ' + styles.active}
                  />
                  <img src={products[1].image} alt='pic' className={styles.slidePic} />
                  <img src={products[2].image} alt='pic' className={styles.slidePic} />
                  <img src={products[3].image} alt='pic' className={styles.slidePic} />
                  <img src={products[4].image} alt='pic' className={styles.slidePic} />
                  <img src={products[5].image} alt='pic' className={styles.slidePic} />
                </div>
                <Button className={styles.next}>
                  <p>{'>'}</p>
                </Button>
              </div>
            </div>
            <div className={'col-6 ' + styles.picture}>
              <img src={products[2].image} alt='prod3' />
              <div className={styles.pictureDetails}>
                <h3>
                  from <span>${products[2].price}</span>
                </h3>
                <h1>{products[2].name}</h1>
                <Button variant='green'>Shop now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Gallery.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
      favorite: PropTypes.bool,
      image: PropTypes.string,
      oldprice: PropTypes.number,
    })
  ),
};

export default Gallery;
