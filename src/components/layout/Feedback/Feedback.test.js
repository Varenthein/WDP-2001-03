import React from 'react';
import { shallow } from 'enzyme';
import Feedback from './Feedback';

const mockProps = [
  {
    props1: 'test1',
    props2: 'test2',
  },
  {
    props1: 'test3',
    props2: 'test4',
  },
];

describe('Feedback', () => {
  it('renders without crashing', () => {
    shallow(<Feedback feedback={mockProps} />);
  });
});
