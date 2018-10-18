import React from 'react';
import { shallow, mount } from 'enzyme';
import LocalGame from '../LocalGame.js'

describe('LocalGame', () => {

  beforeAll(() => {
    
    const createElement = document.createElement.bind(document);
    document.getElementById = (tagName) => {
        if (tagName === 'canvas') {
            return {
                getContext: () => ({}),
                measureText: () => ({}),
                addEventListener: () => ({})
            };
        }
        return getElementById(tagName);
    };

  });

  it('renders a header', () => {
    var wrapper = shallow(<LocalGame />)
    expect(wrapper.find('h1').text()).toMatch('Local Map')
  });

});

