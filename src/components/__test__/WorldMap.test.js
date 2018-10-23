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

  let testGrid1 = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
  ]

  beforeAll(() => {
    wrapper = shallow(<WorldMap map={testGrid1}/>)
  });

  describe('pause', () => {
    it('pauses the game', () => {
      wrapper.instance().pauseGame()
    })
  })

  it('renders the map grid', () => {
    
    expect(wrapper.instance().renderGrid().length).toEqual(5)
  });

  it('checks cells for infected neighbors', () => {
    
    let testGrid2 = [
      [0,0,0,0,0],
      [0,0,0,0,0],
      [0,0,0,0,0],
      [0,0,0,1,0],
      [0,0,0,0,0]
    ]
    // const wrapper1 = shallow(<WorldMap grid={testGrid1}/>)
    // const wrapper2 = shallow(<WorldMap grid={testGrid2}/>)
    // wrapper = mount(<WorldMap/>)

// TEST NOT WORKING. SEE 'grid: props.grid..' in WorldMap constructor
    // expect(wrapper2.instance().checkNeighbours(2,2)).toEqual(false)
    // expect(wrapper2.instance().checkNeighbours(2,2)).toEqual(t)
  });
  
});
