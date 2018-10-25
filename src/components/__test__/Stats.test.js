import React from 'react';
import { shallow } from 'enzyme';
import { spy, stub } from 'sinon';
import Stats from '../Stats.js'

describe('Stats', () => {
  
  it('renders a cell dependent on land prop', () => {
    const wrapper = shallow(<Stats playableCities={[]}/>)
    expect(wrapper.find('h1').text()).toMatch("STATS")
  });

  it('contains buttons to trigger stat increase ', () => {
    spy(Stats.prototype, 'increaseStat');
    const increaseStat = stub();
    const wrapper = shallow(<Stats playableCities={[]} increaseStat={increaseStat}/>)
    wrapper.find('#speedUp').simulate('click');
    wrapper.find('#resilienceUp').simulate('click');
    wrapper.find('#aggressionUp').simulate('click');
    // Expectation (.callCount)
  });

  it('contains buttons to trigger ability changes', () => {
    const specialAbility = stub();
    const wrapper = shallow(<Stats playableCities={[]} specialAbility={specialAbility}/>)
    wrapper.find('#fishFrenzy').simulate('click');
    wrapper.find('#flyingZombies').simulate('click');
    wrapper.find('#worldWarZ').simulate('click');
    // Expectation (.callCount)
  });

  it('contains buttons to route to world map', () => {
    const done = stub();
    const wrapper = shallow(<Stats playableCities={[]} done={done}/>)
    wrapper.find('#done').simulate('click');
    // Expectation (.callCount)
  });


});
