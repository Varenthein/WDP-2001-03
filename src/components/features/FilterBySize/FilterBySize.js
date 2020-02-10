import React from 'react';
import styles from './FilterBySize.module.scss';
import PropTypes from 'prop-types';

const FilterBySize = ({ sizes }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div
          className={
            'row no-gutters align-items-center justify-content-between ' +
            styles.heading
          }
        >
          {'FILTER BY SIZE'}
        </div>
        <container>
          <ul className={styles.bySize}>
            {sizes.map(size => (
              <li key={size.id}>
                <input type='checkbox' {...size.name} />
                <label>{size.name} </label> <span className={styles.dot}>5</span>
              </li>
            ))}
          </ul>
        </container>
      </div>
    </div>
  </div>
);

FilterBySize.propTypes = {
  sizes: PropTypes.array,
};

export default FilterBySize;
