import React from 'react';
import PropTypes from 'prop-types';
import FadeIn from 'react-fade-in';
import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBoxContainer';
import Swipe from '../../features/Swipe/Swipe';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
  };

  desktop = {
    elemsPerPage: 8,
  };

  mobile = {
    elemsPerPage: 1,
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  handleCategoryChange(newCategory) {
    this.setState({ activeCategory: newCategory });
  }

  handleMoveRight() {
    console.log('right');
  }

  handleMoveLeft() {
    console.log('left');
  }

  render() {
    const { categories, products, viewportMode } = this.props;
    const { activeCategory, activePage } = this.state;

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(
      viewportMode === 'tablet' || viewportMode === 'mobile'
        ? categoryProducts.length / this.mobile.elemsPerPage
        : categoryProducts.length / this.desktop.elemsPerPage
    );

    const elemsToDisplay =
      viewportMode === 'tablet' || viewportMode === 'mobile'
        ? categoryProducts.slice(activePage, activePage + 1)
        : categoryProducts.slice(activePage * 8, (activePage + 1) * 8);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-lg-auto col-12' + styles.heading}>
                <h3>New furniture</h3>
              </div>
              <div className={'col ' + styles.menu}>
                <ul>
                  {categories.map(item => (
                    <li key={item.id}>
                      <a
                        className={item.id === activeCategory && styles.active}
                        onClick={() => {
                          this.handleCategoryChange(item.id);
                        }}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <div className='row'>
            <Swipe
              leftAction={() => this.handleMoveLeft()}
              rightAction={() => this.handleMoveRight()}
            >
              {elemsToDisplay.map(item => (
                <div key={item.id} className='col-lg-3 col-12'>
                  <FadeIn transitionDuration={2000}>
                    <ProductBox {...item} />
                  </FadeIn>
                </div>
              ))}
            </Swipe>
          </div>
        </div>
      </div>
    );
  }
}

NewFurniture.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
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
    })
  ),
  viewportMode: PropTypes.string,
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
