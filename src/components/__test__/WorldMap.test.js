import React from 'react';
import { shallow, mount } from 'enzyme';
import WorldMap from '../WorldMap.js'

jest.mock('../CityLink', () => () => 
  <div className="city-link">  
    <button className="city-button"/>
  </div>
)

describe('WorldMap', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<WorldMap />)
  });

  it('renders a header', () => {
    expect(wrapper.find('h1').text()).toMatch('World Map')
  });

  it('renders two buttons', () => {
    wrapper = mount(<WorldMap/>)
    expect(wrapper.find('.city-link button').length).toEqual(2)
  });

  it('populates grid on initial mount', () => {
  });

  it('infects a single cell on initial mount', () => {
  });

});
