import React from 'react';
import { shallow } from 'enzyme';
import WorldMap from '../WorldMap.js'

describe('WorldMap', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<WorldMap />)
  });
  
  it('renders a header', () => {
    expect(wrapper.find('h1').text()).toMatch('World Map')
  });

  it('renders two buttons', () => {
    expect(wrapper.find('button.city-button').length).toEqual(2)
  });
  
});
