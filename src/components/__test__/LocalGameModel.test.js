import React from 'react';
import LocalGameModel from '../../model/LocalGameModel.js'

describe('LocalGameModel', () => {

  it('instantiates with game speed', () => {
    
    const createElement = document.createElement.bind(document);
    document.getElementById = (tagName) => {
        if (tagName === 'canvas') {
            return {
                getContext: () => ({}),
                measureText: () => ({})
            };
        }
        return getElementById(tagName);
    };

    const localGameModel = new LocalGameModel()


    expect(localGameModel.gameSpeed).toBe(15)
  });

});
