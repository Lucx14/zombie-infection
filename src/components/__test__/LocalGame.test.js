import React from 'react';
import { shallow, mount } from 'enzyme';
import LocalGame from '../LocalGame.js';

describe('LocalGame', () => {


  it('renders a header', () => {
    const wrapper = shallow(<LocalGame />);
    expect(wrapper.find('h1').text()).toMatch('Local Map')
  });
});



// what should we actually test here?
// what we do is render a canvas to the page(via local game model)
// but for some reason canvas appears as null to jest


