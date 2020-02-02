import React from 'react';
import PropTypes from 'prop-types';
import styles from './Breadcrumb.module.scss';
import BreadcrumbItem from './BreadcrumbItem';
import BreadcrumbSeparator from './BreadcrumbSeparator';

const Breadcrumb = props => {
  let children = React.Children.toArray(props.children);

  children = children.map((child, index) => (
    <BreadcrumbItem key={index}>{child}</BreadcrumbItem>
  ));

  const lastIndex = children.length - 1;

  children = children.reduce((arr, child, index) => {
    const notLast = index < lastIndex;
    if (notLast) {
      arr.push(child, <BreadcrumbSeparator key={index}>{'>'}</BreadcrumbSeparator>);
    } else {
      arr.push(child);
    }
    return arr;
  }, []);

  return <ol>{children}</ol>;
};

Breadcrumb.propTypes = {
  children: PropTypes.node,
};

export default Breadcrumb;
