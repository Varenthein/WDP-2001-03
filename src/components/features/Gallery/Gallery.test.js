import React from 'react';
import { shallow } from 'enzyme';
import Gallery from './Gallery';

const mockProducts = [
  {
    id: '1',
    name: 'bed',
    category: 'bed',
    price: 30,
    oldprice: 35,
    stars: 2,
    promo: 'sale',
    newFurniture: true,
    image: 'https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839183_1280.jpg',
  },
  {
    id: '2',
    name: 'bed',
    category: 'bed',
    price: 30,
    oldprice: 35,
    stars: 2,
    promo: 'sale',
    newFurniture: true,
    image: 'https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839183_1280.jpg',
  },
  {
    id: '3',
    name: 'bed',
    category: 'bed',
    price: 30,
    oldprice: 35,
    stars: 2,
    promo: 'sale',
    newFurniture: true,
    image: 'https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839183_1280.jpg',
  },
  {
    id: '4',
    name: 'bed',
    category: 'bed',
    price: 30,
    oldprice: 35,
    stars: 2,
    promo: 'sale',
    newFurniture: true,
    image: 'https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839183_1280.jpg',
  },
  {
    id: '5',
    name: 'bed',
    category: 'bed',
    price: 30,
    oldprice: 35,
    stars: 2,
    promo: 'sale',
    newFurniture: true,
    image: 'https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839183_1280.jpg',
  },
  {
    id: '6',
    name: 'bed',
    category: 'bed',
    price: 30,
    oldprice: 35,
    stars: 2,
    promo: 'sale',
    newFurniture: true,
    image: 'https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839183_1280.jpg',
  },
];

describe('Component Gallery', () => {
  it('should render without crashing', () => {
    const component = shallow(<Gallery products={mockProducts} />);
    expect(component).toBeTruthy();
  });
});
