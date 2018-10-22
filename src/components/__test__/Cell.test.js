import React from 'react';
import { shallow } from 'enzyme';
import Cell from '../Cell.js'

describe('Cell', () => {
  it('renders a cell dependent on land prop', () => {
    const wrapper1 = shallow(<Cell land={1} />)
    const wrapper2 = shallow(<Cell land={2} />)
    const wrapper3 = shallow(<Cell land={3} />)
    const wrapper4 = shallow(<Cell land={4} />)
    const wrapper5 = shallow(<Cell land={5} />)
    const wrapper6 = shallow(<Cell land={6} />)
    const wrapper7 = shallow(<Cell land={7} />)

    expect(wrapper1.find('.north-america').length).toEqual(1)
    expect(wrapper2.find('.south-america').length).toEqual(1)
    expect(wrapper3.find('.europe').length).toEqual(1)
    expect(wrapper4.find('.africa').length).toEqual(1)
    expect(wrapper5.find('.asia').length).toEqual(1)
    expect(wrapper6.find('.oceana').length).toEqual(1)
    expect(wrapper7.find('.middle-east').length).toEqual(1)
  });
});
