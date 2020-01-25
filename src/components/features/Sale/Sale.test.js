import React from 'react';
import { shallow } from 'enzyme';
import Sale from './Sale';

describe('Component sale', () => {
  it('should render component without crashing', () => {
    const component = shallow(<Sale />);
    expect(component).toBeTruthy();
  });
  it('should render div without crashing', () => {
    const component = shallow(<Sale />);
    expect(component.exists('.root')).toEqual(true);
  });
});
