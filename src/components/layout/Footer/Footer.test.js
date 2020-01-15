import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Component Footer', () => {
  it('should render without crashing', () => {
    const component = shallow(<Footer />);
    expect(component).toBeTruthy();
  });
});
