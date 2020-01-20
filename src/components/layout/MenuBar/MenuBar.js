import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const MenuBar = ({ children }) => {
  let isCollapsed = false;
  let rotate = false;
  let [isMenuExpanded, setExpantion] = useState(false);
  const mqlPhones = window.matchMedia('(max-width: 767px)');
  const mqlTablets = window.matchMedia('(max-width: 991px)');

  if (mqlPhones.matches) {
    isCollapsed = true;
  }

  if (mqlTablets.matches && !mqlPhones.matches) {
    rotate = true;
  }

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row align-items-center'>
          <div
            className={
              'col ' +
              (isCollapsed ? styles.box : '') +
              ' ' +
              (rotate ? styles.hidden : '')
            }
          >
            <ProductSearch />
            <button
              onClick={() => setExpantion(!isMenuExpanded)}
              className={isCollapsed ? styles.hamburger : styles.hidden}
            >
              <FontAwesomeIcon className={styles.icon} icon={faBars} />
            </button>
          </div>
          <div
            className={
              'col-auto ' +
              (isCollapsed ? styles.mobileMenu : styles.menu) +
              ' ' +
              (isMenuExpanded ? styles.expandMobileMenu : '')
            }
          >
            <ul>
              <li>
                <a href='#' className={styles.active}>
                  Home
                </a>
              </li>
              <li>
                <a href='#'>Furniture</a>
              </li>
              <li>
                <a href='#'>Chair</a>
              </li>
              <li>
                <a href='#'>Table</a>
              </li>
              <li>
                <a href='#'>Sofa</a>
              </li>
              <li>
                <a href='#'>Bedroom</a>
              </li>
              <li>
                <a href='#'>Blog</a>
              </li>
            </ul>
          </div>
          <div
            className={
              'col ' +
              (isCollapsed ? styles.box : '') +
              ' ' +
              (rotate ? '' : styles.hidden)
            }
          >
            <ProductSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
