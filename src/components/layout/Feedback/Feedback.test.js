import React from 'react';
import { shallow } from 'enzyme';
import Feedback from './Feedback';

describe('Feedback', () => {
  it('renders without crashing', () => {
    shallow(<Feedback />);
  });
});
