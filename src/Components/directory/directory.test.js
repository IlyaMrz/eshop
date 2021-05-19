import React from 'react';
import { shallow } from 'enzyme';
import { Directory } from './directory';

it('should render directory',()=>{
    expect(shallow(<Directory sections={[]} />)).toMatchSnapshot()
})