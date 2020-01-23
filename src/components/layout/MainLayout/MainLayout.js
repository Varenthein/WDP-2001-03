import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const checkWidth = () => {
  const mobile = '(max-width: 576px)';
  const tablet = '(max-width: 968px)';

  if (window.matchMedia(`${mobile}`).matches) {
    console.log('window match media for mobile');
    return 'mobile';
  } else if (window.matchMedia(`${tablet}`).matches) {
    console.log('window match media for tablet');
    return 'tablet';
  } else {
    console.log('window match media for desktop');
    return 'desktop';
  }
};

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
