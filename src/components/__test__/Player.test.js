// import React from 'react';
import Player from '../../model/Player.js';

describe('Player', () => {


  it('instantiates a player', () => {
    const player = new Player();
    expect(player).toEqual({"h": 10, "w": 10, "x": 395, "y": 295})
  });
});