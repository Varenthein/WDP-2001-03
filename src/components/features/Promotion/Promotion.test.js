import React from 'react';
import { shallow } from 'enzyme';
import Promotion from './Promotion';

describe('component Promotion', () => {
  it('should render component without crashing', () => {
    const component = shallow(<Promotion />);
    expect(component).toBeTruthy();
  });
});
