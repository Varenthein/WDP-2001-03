import React from 'react';
import ReactSwipe from 'react-swipe';
import ProductBox from '../../common/ProductBox/ProductBoxContainer';
import PropTypes from 'prop-types';
import FadeIn from 'react-fade-in';

const Carousel = ({ pages, newPage, oldPage, name }) => {
  let reactSwipeEl;
  const nextName = `${name}-next`;
  const prevName = `${name}-prev`;

  function eventFire(el, etype) {
    if (el.fireEvent) {
      el.fireEvent('on' + etype);
    } else {
      var evObj = document.createEvent('Events');
      evObj.initEvent(etype, true, false);
      el.dispatchEvent(evObj);
    }
  }

  if (newPage - oldPage > 0) {
    eventFire(document.getElementById(nextName), 'click');
  } else if (newPage - oldPage < 0) {
    eventFire(document.getElementById(prevName), 'click');
  }
  return (
    <div>
      <ReactSwipe
        className='carousel'
        swipeOptions={{ continuous: false }}
        ref={el => (reactSwipeEl = el)}
      >
        {pages.map(item => (
          <div className='row' key={item.id}>
            <div className='col-lg-3 col-12'>
              <FadeIn transitionDuration={2000}>
                <ProductBox {...item} />
              </FadeIn>
            </div>
          </div>
        ))}
      </ReactSwipe>
      <button
        style={{ display: 'none' }}
        id={nextName}
        onClick={() => reactSwipeEl.next()}
      >
        Next
      </button>
      <button
        style={{ display: 'none' }}
        id={prevName}
        onClick={() => reactSwipeEl.prev()}
      >
        Previous
      </button>
    </div>
  );
};

Carousel.propTypes = {
  pages: PropTypes.array,
  newPage: PropTypes.number,
  oldPage: PropTypes.number,
  name: PropTypes.string,
};

export default Carousel;
