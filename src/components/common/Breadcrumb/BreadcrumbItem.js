import React from 'react';
import PropTypes from 'prop-types';
import styles from './Breadcrumb.module.scss';

const BreadcrumbItem = ({ children, ...props }) => {
  return (
    <li className={styles.item} {...props}>
      {children}
    </li>
  );
};

BreadcrumbItem.propTypes = {
  children: PropTypes.node,
};

export default BreadcrumbItem;
