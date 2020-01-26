import React from 'react';
import PropTypes from 'prop-types';
import FadeIn from 'react-fade-in';
import GalleryBox from '../../common/GalleryBox/GalleryBoxContainer';
import styles from './Gallery.module.scss';
import Button from '../../common/Button/Button';

class Gallery extends React.Component {
  state = {
    activeTab: 'featured',
    filteredArr: this.props.products.filter(el => el.newFurniture === true),
    activePage: 0,
  };

  moveRight() {
    this.setState(prevState => ({
      activePage: prevState.activePage + 1,
    }));
  }

  moveLeft() {
    this.setState(prevState => ({
      activePage: prevState.activePage - 1,
    }));
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
    const { activeTab, filteredArr, activePage } = this.state;
    const categories = [
      { id: 'featured', name: 'featured' },
      { id: 'topSeller', name: 'top seller' },
      { id: 'saleOff', name: 'sale off' },
      { id: 'topRated', name: 'top rated' },
    ];
    const images = filteredArr.map(el => el.image);

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
              <div className={styles.productSlider}>
                <div className={styles.productWrapper}>
                  {filteredArr.map(el => (
                    <div key={el.id}>
                      <FadeIn transitionDuration={2000}>
                        <GalleryBox {...el} />
                      </FadeIn>
                    </div>
                  ))}
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
                    {images.slice(activePage * 6, (activePage + 1) * 6).map((el, i) => (
                      <img key={i} src={el} alt='pic' className={styles.slidePic} />
                    ))}
                  </div>
                  <Button
                    className={styles.next}
                    onClick={e => {
                      e.preventDefault();
                      this.moveRight(images);
                    }}
                  >
                    <p>{'>'}</p>
                  </Button>
                </div>
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
