import React from 'react';
import styles from './FilterByPrice.module.scss';
import SliderFilter from '../SliderFilter/SliderFilter';
const FilterByPrice = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div
          className={
            'row no-gutters align-items-center justify-content-between ' +
            styles.heading
          }
        >
          {'FILTER BY PRICE'}
        </div>
        <container>
          <SliderFilter />
        </container>
      </div>
    </div>
  </div>
);

export default FilterByPrice;
