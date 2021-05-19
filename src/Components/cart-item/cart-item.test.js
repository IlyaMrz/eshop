import { shallow } from 'enzyme';
import React from 'react';
import { CartItem } from './cart-item';
// import '../../setupTests';
// https://backbencher.dev/blog/empty-shallowwrapper-snapshot-jest-enzyme
// import { create } from "react-test-renderer";

it('should render CartItem component', () => {
    const mockItem = {
      imageUrl: 'www.testImage.com',
      price: 10,
      name: 'hats',
      quantity: 2
    };
  
    expect(shallow(<CartItem item={mockItem} />)).toMatchSnapshot();
  });