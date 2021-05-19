import React from 'react';
import { shallow } from 'enzyme';
import { CollectionsOverview } from './collections-overview';

it('should render CollectionsOverview component', () => {
  expect(shallow(<CollectionsOverview collections={[]} />)).toMatchSnapshot();
});