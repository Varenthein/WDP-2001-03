import React from 'react';
import { shallow } from 'enzyme';
import NewFurniture from './NewFurniture';

describe('Component NewFurniture', () => {
  it('should render without crashing', () => {
    const component = shallow(<NewFurniture />);
    expect(component).toBeTruthy();
  });
});
