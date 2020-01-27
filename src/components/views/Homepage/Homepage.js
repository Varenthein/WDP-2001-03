import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';
import Sale from '../../features/Sale/Sale.js';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Gallery from '../../features/Gallery/GalleryContainer';
import StickyBar from '../../features/StickyBar/StickyBarContainer';
import Promotion from '../../features/Promotion/PromotionContainer';

const Homepage = () => (
  <div className={styles.root}>
    <Promotion />
    <FeatureBoxes />
    <Sale />
    <NewFurniture />
    <Gallery />
    <StickyBar />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
