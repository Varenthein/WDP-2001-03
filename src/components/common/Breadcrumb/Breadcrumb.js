import React from 'react';
import PropTypes from 'prop-types';
import styles from './Breadcrumb.module.scss';
import BreadcrumbItem from './BreadcrumbItem';

const Breadcrumb = props => {
  let children = React.Children.toArray(props.children);

  children = children.map((child, index) => (
    <BreadcrumbItem key={index}>{child}</BreadcrumbItem>
  ));

  return <ol>{children}</ol>;
};

Breadcrumb.propTypes = {
  children: PropTypes.node,
};

export default Breadcrumb;
