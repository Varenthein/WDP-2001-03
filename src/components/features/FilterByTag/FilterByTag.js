import React from 'react';
import styles from './FilterByTag.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons';

const FilterByTag = ({ categories }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div
          className={
            'row no-gutters align-items-center justify-content-between ' +
            styles.heading
          }
        >
          {'FILTER BY TAGS'}
        </div>
        <container>
          <ul className={styles.byTag}>
            {categories.map(category => (
              <li key={category.id}>
                <input type='checkbox' id={category.id} />
                <label htmlFor={category.id}>
                  <FontAwesomeIcon icon={faTags} className=' fa'></FontAwesomeIcon>
                  {category.name}
                </label>
              </li>
            ))}
          </ul>
        </container>
      </div>
    </div>
  </div>
);

FilterByTag.propTypes = {
  categories: PropTypes.array,
};

export default FilterByTag;
