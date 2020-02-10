import React from 'react';
import styles from './FilterByColor.module.scss';
import PropTypes from 'prop-types';

const FilterByColor = ({ colors }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div
          className={
            'row no-gutters align-items-center justify-content-between ' +
            styles.heading
          }
        >
          {'FILTER BY COLOR'}
        </div>
        <container>
          <ul className={styles.byCol}>
            {colors.map(color => (
              <li key={color.id}>
                <span
                  style={{ backgroundColor: color.id }}
                  className={styles.square}
                ></span>
                <span className={styles.dot}>{color.name}</span>
              </li>
            ))}
          </ul>
        </container>
      </div>
    </div>
  </div>
);

FilterByColor.propTypes = {
  colors: PropTypes.array,
};

export default FilterByColor;
