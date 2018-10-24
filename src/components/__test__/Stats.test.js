import React from 'react';
import { shallow } from 'enzyme';
import Stats from '../Stats.js'

describe('Cell', () => {
  it('renders a cell dependent on land prop', () => {
    const wrapper = shallow(<Stats />)
    expect(wrapper.find('h1').text()).toMatch("Stats")
  });
});
