import React from 'react';
import PropTypes from 'prop-types';
import styles from './Promotion.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';

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

    // eslint-disable-next-line no-console
    console.log(products);
    const dots = [];
    for (let i = 0; i <= 0; i++) {
      dots
        .push
        // <li>
        //   <a
        //     onClick={()=>this.handlePageChange(i)}
        //     className={i ===activePage && styles.active}
        //   >
        //     page{i}
        //   </a>
        // </li>
        ();
    }
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>Promotion</h3>
              </div>
              <div className={'col ' + styles.menu}></div>
              <div className={'col-auto ' + styles.dots}>{/* <ul>{dots}</ul> */}</div>
            </div>
          </div>
          <div className='row'>
            {categoryProducts.slice(activePage * 1, (activePage + 1) * 1).map(item => (
              <div key={item.id} className='col-3'>
                <ProductBox {...item} />
              </div>
            ))}
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
