import React from 'react';
import { shallow, mount } from 'enzyme';
import LocalGame from '../LocalGame.js'

describe('LocalGame', () => {

  beforeAll(() => {

    const createElement = document.createElement.bind(document);

    document.getElementById = (tagName) => {
        if (tagName === 'canvas' || tagName === 'underCanvas') {
            return {
                getContext: () => ({}),
                measureText: () => ({}),
                addEventListener: () => ({}),
                focus: () => ({})
            };
        }
    };

  });

  it('renders a city name on screen', () => {
    var wrapper = shallow(<LocalGame city="london"/>)
    expect(wrapper.find('p').first().text()).toMatch("London")
  });

});
