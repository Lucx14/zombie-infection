import React from 'react';
import { shallow } from 'enzyme';
import WorldMap from './WorldMap.js'

describe('WorldMap', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<WorldMap />)
    expect(wrapper.find('h1').exists()).toBe(true)
  });
});
