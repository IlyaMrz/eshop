import React from 'react';
import { shallow } from 'enzyme';

import { CartDowndrop } from './cart-dropdown';
import CartItem from '../cart-item/cart-item';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

describe('CartDowndrop component', () => {
  let wrapper;
  let mockHistory;
  let mockDispatch;
  const mockCartItems = [{ id: 1 }, { id: 2 }, { id: 3 }];

  beforeEach(() => {
    mockHistory = {
      push: jest.fn()
    };

    mockDispatch = jest.fn();

    const mockProps = {
      cartItems: mockCartItems,
      history: mockHistory,
      dispatch: mockDispatch
    };

    wrapper = shallow(<CartDowndrop {...mockProps} />);
  });

  it('should render CartDowndrop component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call history.push when button is clicked', () => {
    wrapper.find('CartDropdownButton').simulate('click');
    expect(mockHistory.push).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith(toggleCartHidden());
  });

  it('should render an equal number of CartItem components as the cartItems prop', () => {
    expect(wrapper.find(CartItem).length).toEqual(mockCartItems.length);
  });

  it('should render EmptyMessageContainer if cartItems is empty', () => {
    const mockProps = {
      cartItems: [],
      history: mockHistory,
      dispatch: mockDispatch
    };

    const newWrapper = shallow(<CartDowndrop {...mockProps} />);
    expect(newWrapper.exists('EmptyMessageContainer')).toBe(true);
    expect(newWrapper).toMatchSnapshot();
  });
});