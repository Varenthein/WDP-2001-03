import React from 'react';
import styles from './Sale.module.scss';

const Sale = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className='col-6 '>
          <div className={styles.bigbox}>
            <div className={styles.bgc}>
              <h3 className={styles.title}>Guest room</h3>
              <h2 className={styles.product}>Sofa</h2>
              <div className={styles.discount}>-20%</div>
            </div>
          </div>
        </div>
        <div className='col-6'>
          <div className='row'>
            <div className={'col-12 ' + styles.box1}>
              <div className={styles.img}>
                <img src='/images/chair2.png' alt='chair' className={styles.chair1} />
              </div>
              <div className={styles.position}>
                <p className={styles.office}>
                  <span>Office</span> chair
                </p>
                <p className={styles.subOffice}>collection</p>
                <p className={styles.price}>$200.00</p>
              </div>
              <div className={styles.img}>
                <img src='/images/chair1.png' alt='chair' className={styles.chair2} />
              </div>
            </div>
          </div>
          <div className='row'>
            <div className={'col-12 ' + styles.box2}>
              <div className={styles.img}>
                <img src='/images/bed.png' alt='bed' className={styles.bed} />
              </div>
              <div className={styles.position}>
                <p className={styles.special}>
                  <span>special</span> collection
                </p>
                <p className={styles.describe}>save up 45% of furniture</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Sale;
