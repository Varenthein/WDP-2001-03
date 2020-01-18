import React from 'react';
import { shallow } from 'enzyme';
import ProductSearch from './ProductSearch';

describe('Component ProductSearch', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductSearch />);
    expect(component).toBeTruthy();
  });
  it('should render list without crashing', () => {
    const component = shallow(<ProductSearch />);
    expect(component.exists('.list')).toEqual(true);
  });
});
