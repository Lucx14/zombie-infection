import React from 'react';
import { shallow, mount, render } from 'enzyme';
import WorldMap from '../WorldMap.js'

jest.mock('../CityLink', () => () => 
  <div className="city-link">  
    <button className="city-button"/>
  </div>
)

jest.mock('../Cell', () => () => 
  <div>  
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
    wrapper = mount(<WorldMap />)
    expect(wrapper.find('.city-link button').length).toEqual(2)
  });

  it('populates the grid with 35 rows and 50 columns', () => {
    wrapper = mount(<WorldMap/>)
    expect(wrapper.find('.grid div').length).toEqual(35*50)
  });

});
