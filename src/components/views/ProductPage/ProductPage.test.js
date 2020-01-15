import React from 'react';
import { shallow } from 'enzyme';
import ProductPage from './ProductPage';

describe('ProductPage', () => {
  it('renders without crashing', () => {
    shallow(<ProductPage />);
  });
});
