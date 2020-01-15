import React from 'react';
import { shallow } from 'enzyme';
import FeatureBox from './FeatureBox';

describe('Component FeatureBox', () => {
  it('should render without crashing', () => {
    const component = shallow(<FeatureBox />);
    expect(component).toBeTruthy();
  });
});
