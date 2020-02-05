import React from 'react';
// import PropTypes from 'prop-types';

import Brands from '../../layout/Brands/BrandsContainer';

import styles from './Homepage.module.scss';
import Sale from '../../features/Sale/Sale.js';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Gallery from '../../features/Gallery/GalleryContainer';
import StickyBar from '../../features/StickyBar/StickyBarContainer';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <Sale />
    <NewFurniture />
    <Gallery />
    <StickyBar />
    <Brands />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
