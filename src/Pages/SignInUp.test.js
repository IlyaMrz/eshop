import React from 'react';
import { shallow } from 'enzyme';
import SignInUp from './SignInUp';

it('should render SignInAndSignUpPage component', () => {
  expect(shallow(<SignInUp />)).toMatchSnapshot();
});