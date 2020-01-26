import React from 'react';
// import PropTypes from 'prop-types';

import Brands from '../../layout/Brands/BrandsContainer';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import StickyBar from '../../features/StickyBar/StickyBarContainer';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <NewFurniture />
    <StickyBar />
    <Brands />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
