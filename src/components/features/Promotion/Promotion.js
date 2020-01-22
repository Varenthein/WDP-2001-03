import React from 'react';
import PropTypes from 'prop-types';
import styles from './Promotion.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProductBoxPromotion from '../../common/ProductBoxPromotion/ProductBoxPromotion';
import Button from '../../common/Button/Button';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

class Promotion extends React.Component {
  state = {
    activePage: 0,
    activeHotDeals: 'hotDeals',
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  handleHotDealsChange(newHotDeals) {
    this.setState({ activeHotDeals: newHotDeals });
  }

  render() {
    const { products } = this.props;
    const { activeHotDeals, activePage } = this.state;

    const categoryProducts = products.filter(item => item.hotDeals === activeHotDeals);
    const pagesCount = Math.ceil(categoryProducts.length - 1);

    const dots = [];
    for (let i = 0; i <= pagesCount; i++) {
      dots.push(
        <li>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page{i}
          </a>
        </li>
      );
    }
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className={'col-2 ' + styles.dots}>
              <ul>{dots}</ul>
            </div>
          </div>
          <div className={'row'}>
            {categoryProducts.slice(activePage * 1, (activePage + 1) * 1).map(item => (
              <div key={item.id} className='col-4'>
                <ProductBoxPromotion {...item} />
              </div>
            ))}
            <div className={'col-8'}>
              <div className={styles.img}>
                <div className={styles.bgc}>
                  <h3 className={styles.tittle}>
                    indoor <b>furniture</b>
                  </h3>
                  <p className={styles.subtittle}>save up to 50% of all furniture</p>
                  <Button className={styles.white}>SHOP NOW</Button>
                </div>
                <div className={styles.arrow}>
                  <div className={styles.arrowLeft}>
                    <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                  </div>
                  <div className={styles.arrowRight}>
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Promotion.propTypes = {
  children: PropTypes.node,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      oldprice: PropTypes.number,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      hotDeals: PropTypes.string,
      promotion: PropTypes.bool,
      image: PropTypes.string,
    })
  ),
};

Promotion.defaultProps = {
  products: [],
};

export default Promotion;
