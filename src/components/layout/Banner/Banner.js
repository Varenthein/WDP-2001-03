import React from 'react';
import styles from './Banner.module.scss';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <h1 className={styles.heading}>
        bedroom <span>furniture</span>
      </h1>
      <h5 className={styles.subheading}>
        always <span>25%</span> off or more
      </h5>
    </div>
  );
};

export default Banner;
