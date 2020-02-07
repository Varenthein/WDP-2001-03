import React from 'react';
import { shallow } from 'enzyme';
import MenuBar from './MenuBar';

describe('Component MenuBar', () => {
  it('should render without crashing', () => {
    const component = shallow(<MenuBar />);
    expect(component).toBeTruthy();
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
