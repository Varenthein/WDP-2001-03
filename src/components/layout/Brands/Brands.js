import React from 'react';
import PropTypes from 'prop-types';
import styles from './Brands.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import ReactSwipe from 'react-swipe';

let reactSwipeEl;

const Brands = ({
  brands1Desktop,
  brands2Desktop,
  viewportMode,
  brands1Tablet,
  brands2Tablet,
  brands3Tablet,
  brands1Phone,
  brands2Phone,
  brands3Phone,
  brands4Phone,
}) => (
  console.log({ viewportMode }),
  (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.wrapper}>
          <button className={styles.slide} onClick={() => reactSwipeEl.prev()}>
            <FontAwesomeIcon className={styles.icon} icon={faAngleLeft} />
          </button>
          <div className={styles.brandsWrapper}>
            <div className={styles.swipable}>
              {viewportMode === 'desktop' ? (
                <ReactSwipe
                  className={`'carousel' ${styles.swiper}`}
                  swipeOptions={{ continuous: false }}
                  ref={el => (reactSwipeEl = el)}
                >
                  <div className={styles.elem}>
                    {brands1Desktop.map(brand => (
                      <div className={styles.brand} key={brand.key} {...brand}>
                        <img src={brand.image} alt='brand' />
                      </div>
                    ))}
                  </div>
                  <div className={styles.elem}>
                    {brands2Desktop.map(brand => (
                      <div className={styles.brand} key={brand.key} {...brand}>
                        <img src={brand.image} alt='brand' />
                      </div>
                    ))}
                  </div>
                </ReactSwipe>
              ) : (
                ''
              )}
              {viewportMode === 'tablet' ? (
                <ReactSwipe
                  className={`'carousel' ${styles.swiper}`}
                  swipeOptions={{ continuous: false }}
                  ref={el => (reactSwipeEl = el)}
                >
                  <div className={styles.elem}>
                    {brands1Tablet.map(brand => (
                      <div className={styles.brand} key={brand.key} {...brand}>
                        <img src={brand.image} alt='brand' />
                      </div>
                    ))}
                  </div>
                  <div className={styles.elem}>
                    {brands2Tablet.map(brand => (
                      <div className={styles.brand} key={brand.key} {...brand}>
                        <img src={brand.image} alt='brand' />
                      </div>
                    ))}
                  </div>
                  <div className={styles.elem}>
                    {brands3Tablet.map(brand => (
                      <div className={styles.brand} key={brand.key} {...brand}>
                        <img src={brand.image} alt='brand' />
                      </div>
                    ))}
                  </div>
                </ReactSwipe>
              ) : (
                ''
              )}
              {viewportMode === 'mobile' ? (
                <ReactSwipe
                  className={`'carousel' ${styles.swiper}`}
                  swipeOptions={{ continuous: false }}
                  ref={el => (reactSwipeEl = el)}
                >
                  <div className={styles.elem}>
                    {brands1Phone.map(brand => (
                      <div className={styles.brand} key={brand.key} {...brand}>
                        <img src={brand.image} alt='brand' />
                      </div>
                    ))}
                  </div>
                  <div className={styles.elem}>
                    {brands2Phone.map(brand => (
                      <div className={styles.brand} key={brand.key} {...brand}>
                        <img src={brand.image} alt='brand' />
                      </div>
                    ))}
                  </div>
                  <div className={styles.elem}>
                    {brands3Phone.map(brand => (
                      <div className={styles.brand} key={brand.key} {...brand}>
                        <img src={brand.image} alt='brand' />
                      </div>
                    ))}
                  </div>
                  <div className={styles.elem}>
                    {brands4Phone.map(brand => (
                      <div className={styles.brand} key={brand.key} {...brand}>
                        <img src={brand.image} alt='brand' />
                      </div>
                    ))}
                  </div>
                </ReactSwipe>
              ) : (
                ''
              )}
            </div>
          </div>
          <button className={styles.slide} onClick={() => reactSwipeEl.next()}>
            <FontAwesomeIcon className={styles.icon} icon={faAngleRight} />
          </button>
        </div>
      </div>
    </div>
  )
);

Brands.propTypes = {
  image: PropTypes.node,
  brands1Desktop: PropTypes.array,
  brands2Desktop: PropTypes.array,
  viewPortMode: PropTypes.string,
};
export default Brands;
