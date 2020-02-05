import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
import Banner from '../../layout/Banner/Banner';
import Breadcrumb from '../../common/Breadcrumb/Breadcrumb';

// const breadcumbLinks = [
//   { id: 'home', label: 'Home' },
//   { id: 'furniture', label: 'Furniture' },
// ];

const ProductList = ({ match }) => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <Banner />
        <Breadcrumb>
          {/* {breadcumbLinks.map(el => (
            <a key={el.id}>{el.label}</a>
          ))} */}
          <a>Home</a>
          <a key={match.params.categoryId}>{match.params.categoryId}</a>
        </Breadcrumb>
      </div>
    </div>
  );
};

ProductList.propTypes = {
  match: PropTypes.object,
};

export default ProductList;
