import React from 'react';
import { shallow } from 'enzyme';
import CompanyClaim from './CompanyClaim';

describe('CompanyClaim', () => {
  it('renders without crashing', () => {
    shallow(<CompanyClaim />);
  });
});
