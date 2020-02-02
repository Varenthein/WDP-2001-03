import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';

const MenuBar = ({ children }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row align-items-center'>
        <div className='col'>
          <ProductSearch />
        </div>
        <div className={'col-auto ' + styles.menu}>
          <ul>
            <li>
              <NavLink to='/home' activeClassName={styles.active}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/shop/furniture' activeClassName={styles.active}>
                Furniture
              </NavLink>
            </li>
            <li>
              <NavLink to='/shop/chair' activeClassName={styles.active}>
                Chair
              </NavLink>
            </li>
            <li>
              <NavLink to='/shop/table' activeClassName={styles.active}>
                Table
              </NavLink>
            </li>
            <li>
              <NavLink to='/shop/sofa' activeClassName={styles.active}>
                Sofa
              </NavLink>
            </li>
            <li>
              <NavLink to='/shop/bedroom' activeClassName={styles.active}>
                Bedroom
              </NavLink>
            </li>
            <li>
              <NavLink to='/shop/blog' activeClassName={styles.active}>
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
