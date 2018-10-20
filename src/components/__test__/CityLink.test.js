import React from 'react';
import { shallow, render } from 'enzyme';
import CityLink from '../CityLink.js'

describe('CityLink', () => {
  it('renders a button that shows if city is playable', () => {
    const wrapper = shallow(<CityLink city="city" active={true}/>)
    expect(wrapper.find('.clickable').text()).toMatch("city")
  });
});
