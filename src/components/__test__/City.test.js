import React from 'react';
import { render } from 'enzyme';
import City from '../City.js'

describe('City', () => {
  it('renders a city name', () => {
    const wrapper = render(<City city="city"/>)
    expect(wrapper.find('h1').text()).toMatch("city")
  });
});
