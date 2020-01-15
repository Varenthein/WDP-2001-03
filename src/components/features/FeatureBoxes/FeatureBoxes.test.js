import React from 'react';
import { shallow } from 'enzyme';
import FeatureBoxes from './FeatureBoxes';

describe('Component FeatureBoxes', () => {
  it('should render without crashing', () => {
    const component = shallow(<FeatureBoxes />);
    expect(component).toBeTruthy();
  });
});
