import React from 'react';
import styles from './FilterByCategories.module.scss';
import PropTypes from 'prop-types';

const FilterByCategories = ({ categories }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div
          className={
            'row no-gutters align-items-center justify-content-between ' +
            styles.heading
          }
        >
          {'FILTER BY CATEGORIES'}
        </div>
        <container>
          <ul className={styles.byCat}>
            {categories.map(category => (
              <li key={category.id}>
                {category.name}
                <span className={styles.dot}>4</span>
              </li>
            ))}
          </ul>
        </container>
      </div>
    </div>
  </div>
);

FilterByCategories.propTypes = {
  categories: PropTypes.array,
};

export default FilterByCategories;
