import React from 'react';
import { shallow } from 'enzyme';

import { Header } from './header';
import { CartDowndrop } from '../cart-dropdown/cart-dropdown';

describe('Header component', () => {
  let wrapper;
  let mockSignOutStart;

  beforeEach(() => {
    mockSignOutStart = jest.fn();

    const mockProps = {
      hidden: true,
      currentUser: {
        uid: '123'
      },
      signOutStart1: mockSignOutStart
    };

    wrapper = shallow(<Header {...mockProps} />);
  });

  it('should render Header component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('if currentUser is present', () => {
    it('should render sign out link', () => {
      expect(
        wrapper
          .find('OptionLink')
          .at(3)
          .text()
      ).toBe('SIGN OUT');
    });

    it('should call signOutStart1 method when link is clicked', () => {
      wrapper
        .find('OptionLink')
        .at(3)
        .simulate('click');

      expect(mockSignOutStart).toHaveBeenCalled();
    });
  });

  describe('if currentUser is null', () => {
    it('should render sign in link', () => {
      const mockProps = {
        hidden: true,
        currentUser: null,
        signOutStart1: mockSignOutStart
      };

      const newWrapper = shallow(<Header {...mockProps} />);

      expect(
        newWrapper
          .find('OptionLink')
          .at(3)
          .text()
      ).toBe('SIGN IN');
    });
  });

  describe('if hidden is true', () => {
    it('should not render CartDowndrop', () => {
      expect(wrapper.exists(CartDowndrop)).toBe(false);
    });
  });

  describe('if currentUser is null 2', () => {
    it('should render CartDowndrop', () => {
      const mockProps = {
        hidden: false,
        currentUser: null,
        signOutStart1: mockSignOutStart
      };

      const newWrapper = shallow(<Header {...mockProps} />);
      expect(newWrapper.find('withRouter(Connect(CartDowndrop))').exists()).toBe(true);
    });
  });
})