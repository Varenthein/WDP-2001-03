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
  it('should render class active without crashing and with correct colors setiings', () => {
    const component = shallow(<ProductSearch />);
    expect(component.exists('.active')).toEqual(true);
  });
});

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
