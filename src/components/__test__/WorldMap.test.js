import React from 'react';
import { shallow, mount, render } from 'enzyme';
import WorldMap from '../WorldMap.js';

// jest.mock('../CityLink', () => () => 
//   <div className="city-link">  
//     <button className="city-button"/>
//   </div>
// )

// jest.mock('../Cell', () => () => 
//   <div>  
//   </div>
// )

describe('WorldMap', () => {
  let wrapper;
  let testGrid1 = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
  ]

  let testGrid3 = [
    [-1,-1,-1,-1,-1],
    [1,1,1,1,1],
    [1,1,1,1,1],
    [1,1,1,1,1],
    [1,1,1,1,1]
  ]


  beforeAll(() => {
    wrapper = shallow(<WorldMap map={testGrid1} ticker={60} map2={testGrid3}/>)
  });

  describe('pause', () => {
    it('pauses the game', () => {
      const instance = wrapper.instance();
      instance.pauseGame();
      expect(wrapper.state('paused')).toBe(true);
      instance.pauseGame();
      expect(wrapper.state('paused')).toBe(false);
    })
  })

 

  it('increments hour', () => {
    const instance = wrapper.instance();
    expect(wrapper.state('hour')).toBe(0);
    instance.incrementHour();
    expect(wrapper.state('hour')).toBe(1);
  })

  it('increments tick', () => {
    const instance = wrapper.instance();
    expect(wrapper.state('ticker')).toBe(60);
    instance.tick();
    expect(wrapper.state('ticker')).toBe(61);
  })


  it('renders the map grid', () => {
    expect(wrapper.instance().renderGrid().length).toEqual(5)
  });

  it('checks neighbouring cells', () => {
    const instance = wrapper.instance();
    let row = 0;
    let col = 0;
    expect(instance.checkNeighbours(row, col)).toEqual(false);
  });
});
