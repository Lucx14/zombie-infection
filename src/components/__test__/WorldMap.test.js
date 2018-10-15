import React from 'react';
import { shallow } from 'enzyme';
import WorldMap from '../WorldMap.js'

describe('WorldMap', () => {
  it('renders a header', () => {
    const wrapper = shallow(<WorldMap />)
    expect(wrapper.find('h1').text()).toMatch('World Map')
  });

  it('renders two buttons in the canvas', () => {
    const wrapper = shallow(<WorldMap />)
    expect(wrapper.find('canvas button').length).toEqual(2)
  });
});
