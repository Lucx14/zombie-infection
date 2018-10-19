import React from 'react';
import { shallow } from 'enzyme';
import Cell from '../Cell.js'

describe('Cell', () => {
  it('renders a button', () => {
    const wrapper = shallow(<Cell land={0} key={1}/>)
    expect(wrapper.find('.sea').length).toEqual(1)
  });
});
