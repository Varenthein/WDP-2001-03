import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PopUp from '../../common/PopUp/PopUp';

const checkWidth = () => {
  const mobile = '(max-width: 576px)';
  const tablet = '(max-width: 968px)';

  if (window.matchMedia(`${mobile}`).matches) {
    return 'mobile';
  } else if (window.matchMedia(`${tablet}`).matches) {
    return 'tablet';
  } else {
    return 'desktop';
  }
};

const MainLayout = ({ children, changeViewportMode }) => {
  useEffect(() => {
    changeViewportMode(checkWidth());
    window.addEventListener('resize', newMode => changeViewportMode(checkWidth()));
  });

  return (
    <div>
      <Header />
      {children}
      <PopUp message='This website uses own cookies to make sure it is user-friendly and to guarantee its high functionality.' />
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
  changeViewportMode: PropTypes.func,
};

export default MainLayout;
