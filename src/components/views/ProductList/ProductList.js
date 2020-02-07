import React from 'react';
import styles from './ProductList.module.scss';
import SortBy from '../../features/SortBy/SortBy';
import Show from '../../features/Show/Show';
import ViewOptions from '../../features/ViewOptions/ViewOption';
import Banner from '../../layout/Banner/Banner';
import Breadcrumb from '../../common/Breadcrumb/Breadcrumb';

const breadcumbLinks = [
  { id: 'home', label: 'Home' },
  { id: 'furniture', label: 'Furniture' },
];
const ProductList = () => (
  <div className={styles.root}>
    <div className='container'>
      <Banner />
      <Breadcrumb>
        {breadcumbLinks.map(el => (
          <a key={el.id}>{el.label}</a>
        ))}
      </Breadcrumb>
      <div className='row'>
        <div className='col-md-9 col-sm-12'>
          <div
            className={
              'row no-gutters align-items-center justify-content-between ' +
              styles.heading
            }
          >
            <div className={'col-auto ' + styles.category}>{'FURNITURE'}</div>
            <div className={'col-auto ' + styles.sortBy}>
              <Show />
            </div>
            <div className={'col-auto ' + styles.show}>
              <SortBy />
            </div>
            <ViewOptions />
          </div>
        </div>
        <div className='col-md-3 col-sm-12 row'>
          <div className='col-sm-12'>Filter by categories </div>
          <div className='col-sm-12'>Filter by price</div>
          <div className='col-sm-12'>Filter by color</div>
          <div className='col-sm-12'>Filter by size</div>
          <div className='col-sm-12'>Filter by tag</div>
        </div>
      </div>
    </div>
  </div>
);

export default ProductList;
