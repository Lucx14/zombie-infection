import React from 'react';
import { shallow, mount } from 'enzyme';
import LocalGame from '../LocalGame.js';

describe('LocalGame', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<LocalGame />);
  });

  // it('renders a header', () => {
  //   wrapper = mount(<LocalMap />)
  //   expect(wrapper.find('h1').text()).toMatch('Local Map')
  // });
});