import React from 'react';
import { shallow } from 'enzyme';
import ProductList from './ProductList';

describe('ProductList', () => {
  it('renders without crashing', () => {
    shallow(<ProductList />);
  });
});
