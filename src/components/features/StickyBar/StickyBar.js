import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../common/Button/Button';

const StickyBar = ({ comparison }) =>
  comparison.length > 0 ? (
    <div>
      <Button>Compare</Button>
    </div>
  ) : (
    ''
  );

StickyBar.propTypes = {
  comparison: PropTypes.array,
};

export default StickyBar;
