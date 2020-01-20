import React from 'react';
import styles from './Gallery.module.scss';

const Gallery = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <div className={styles.heading}>
              <h3>Furniture gallery</h3>
            </div>
            <div className={styles.menu}>
              <ul>
                <li>
                  <a>Featured</a>
                </li>
                <li>
                  <a>Top seller</a>
                </li>
                <li>
                  <a>Sale off</a>
                </li>
                <li>
                  <a>Top rated</a>
                </li>
              </ul>
            </div>
            <div className={styles.product}>product</div>
            <div className={styles.slider}>slider</div>
          </div>
          <div className='col-6'>picture</div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
