import React from 'react';
import { shallow, mount } from 'enzyme';
import WorldMap from '../WorldMap.js'

describe('WorldMap', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<WorldMap />)
  });

  it('renders a header', () => {
    expect(wrapper.find('h1').text()).toMatch('World Map')
  });

  // refactor this test to mock CityLink
  it('renders two buttons', () => {
    wrapper = mount(<WorldMap/>)
    expect(wrapper.find('.city-link button').length).toEqual(2)
  });

});
