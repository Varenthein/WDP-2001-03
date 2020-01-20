import React from 'react';
import { shallow } from 'enzyme';
import Gallery from './Gallery';

const mockProps = [
  {
    id: 1,
    name: 'bed',
    category: 'bed',
    price: 20,
    oldPrice: 30,
    stars: 2,
    promo: 'sale',
    newFurniture: true,
    favorite: false,
    image: 'image.src',
  },
];

describe('Component Gallery', () => {
  it('should render without crashing', () => {
    const component = shallow(<Gallery {...mockProps}/>);
    expect(component).toBeTruthy();
  });
});
