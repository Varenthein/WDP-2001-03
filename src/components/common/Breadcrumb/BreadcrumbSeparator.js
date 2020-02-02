import React from 'react';
import PropTypes from 'prop-types';
import styles from './Breadcrumb.module.scss';

const BreadcrumbSeparator = ({ children, ...props }) => {
  return (
    <li className={styles.separator} {...props}>
      {children}
    </li>
  );
};

BreadcrumbSeparator.propTypes = {
  children: PropTypes.node,
};

export default BreadcrumbSeparator;
