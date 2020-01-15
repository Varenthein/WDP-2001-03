import React from 'react';
import { shallow } from 'enzyme';
import Homepage from './Homepage';

describe('Homepage', () => {
  it('renders without crashing', () => {
    shallow(<Homepage />);
  });
});
