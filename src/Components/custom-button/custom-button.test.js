import React from 'react';
import { shallow } from 'enzyme';
import { CustomButton } from './custom-button';

it('expect CustomButton render',() => {
    expect(shallow(<CustomButton />)).toMatchSnapshot()
})