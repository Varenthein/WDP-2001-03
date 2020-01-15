import React from 'react';
import { shallow } from 'enzyme';
import TopBar from './TopBar';

describe('TopBar', () => {
  it('renders without crashing', () => {
    shallow(<TopBar />);
  });
});
