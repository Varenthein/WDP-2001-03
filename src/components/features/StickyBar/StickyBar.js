import React from 'react';
import PropTypes from 'prop-types';

const StickyBar = ({ comparison }) => (comparison.length > 0 ? <div></div> : '');

StickyBar.propTypes = {
  comparison: PropTypes.array,
};

export default StickyBar;
