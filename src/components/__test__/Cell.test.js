import React from 'react';
import { shallow } from 'enzyme';
import Cell from '../Cell.js'

describe('Cell', () => {
  it('renders a button', () => {
    const wrapper = shallow(<Cell value={1} key={1}/>)
    expect(wrapper.find('button.cell').length).toEqual(1)
  });
});
