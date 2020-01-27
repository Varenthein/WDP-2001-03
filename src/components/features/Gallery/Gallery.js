import React from 'react';
import PropTypes from 'prop-types';
import FadeIn from 'react-fade-in';
import GalleryBox from '../../common/GalleryBox/GalleryBoxContainer';
import styles from './Gallery.module.scss';
import Button from '../../common/Button/Button';
import ReactTooltip from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';

class Gallery extends React.Component {
  state = {
    activeTab: 'featured',
    filteredArr: this.props.products.filter(el => el.newFurniture === true),
    activePage: 0,
    currentProduct: {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      price: 30,
      oldprice: 35,
      stars: 5,
      promo: '',
      newFurniture: true,
      favorite: true,
      image: 'https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839183_1280.jpg',
    },
  };

  setNewCurrentProduct(el) {
    this.setState({
      currentProduct: {
        id: el.id,
        name: el.name,
        price: el.price,
        oldprice: el.oldprice,
        stars: el.stars,
        promo: el.promo,
        newFurniture: el.newFurniture,
        favorite: el.favorite,
        image: el.image,
      },
    });
  }

  moveRight() {
    const pagesCount = Math.ceil(this.state.filteredArr.length / 6);
    if (this.state.activePage < pagesCount - 1) {
      this.setState(prevState => ({
        activePage: prevState.activePage + 1,
      }));
    }
  }

  moveLeft() {
    const pagesCount = Math.ceil(this.state.filteredArr.length / 6);
    if (this.state.activePage > 0 && this.state.activePage < pagesCount) {
      this.setState(prevState => ({
        activePage: prevState.activePage - 1,
      }));
    }
  }

  filterProducts(arr, activeTab) {
    switch (activeTab) {
      case 'featured':
        this.setState({ filteredArr: arr.filter(el => el.newFurniture === true) });
        break;
      case 'topSeller':
        this.setState({ filteredArr: arr.filter(el => el.favorite === true) });
        break;
      case 'saleOff':
        this.setState({ filteredArr: arr.filter(el => el.promo === 'sale') });
        break;
      case 'topRated':
        this.setState({ filteredArr: arr.filter(el => el.stars === 5) });
        break;
      default:
        this.setState({ filteredArr: arr.filter(el => el.newFurniture === true) });
    }
  }

  handleTabChange(arr, newTab) {
    this.setState({ activeTab: newTab });
    this.filterProducts(arr, newTab);
  }

  render() {
    const { products } = this.props;
    const { activeTab, filteredArr, activePage, currentProduct } = this.state;
    const categories = [
      { id: 'featured', name: 'featured' },
      { id: 'topSeller', name: 'top seller' },
      { id: 'saleOff', name: 'sale off' },
      { id: 'topRated', name: 'top rated' },
    ];
    let isActive = false;
    console.log('isActive', isActive);

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
                          this.handleTabChange(products, el.id);
                        }}
                      >
                        {el.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <FadeIn transitionDuration={2000}>
                <div className={styles.productSlider}>
                  <div className={styles.product}>
                    <img src={currentProduct.image} alt='product' />
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
                      <h5>{currentProduct.name}</h5>
                      <div className={styles.stars}>
                        {[1, 2, 3, 4, 5].map(i => (
                          <a key={i} href='#'>
                            {i <= currentProduct.stars ? (
                              <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                            ) : (
                              <FontAwesomeIcon icon={farStar}>
                                {i} stars
                              </FontAwesomeIcon>
                            )}
                          </a>
                        ))}
                      </div>
                      <div className={styles.triangleBottomRight} />
                      <div className={styles.price}>
                        <h3>${currentProduct.price}</h3>
                        <h5>${currentProduct.oldprice}</h5>
                      </div>
                    </div>
                  </div>
                  <div className={styles.slider}>
                    <Button
                      className={styles.prev}
                      onClick={e => {
                        e.preventDefault();
                        this.moveLeft();
                      }}
                    >
                      <p>{'<'}</p>
                    </Button>
                    <div className={styles.slides}>
                      {filteredArr
                        .slice(activePage * 6, (activePage + 1) * 6)
                        .map(el => (
                          <img
                            key={el.id}
                            src={el.image}
                            alt='pic'
                            className={
                              el.image === currentProduct.image
                                ? styles.slidePic + ' ' + styles.active
                                : styles.slidePic
                            }
                            onClick={e => {
                              e.preventDefault();
                              this.setNewCurrentProduct(el);
                            }}
                          />
                        ))}
                    </div>
                    <Button
                      className={styles.next}
                      onClick={e => {
                        e.preventDefault();
                        this.moveRight();
                      }}
                    >
                      <p>{'>'}</p>
                    </Button>
                  </div>
                </div>
              </FadeIn>
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
