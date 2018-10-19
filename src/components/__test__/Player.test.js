// import React from 'react';
import Player from '../../model/Player.js';

describe('Player', () => {
  var player
  var width
  var height

  beforeEach(() => {
    player = new Player();
    width = 800
    height = 600
  })

  it('instantiates a player', () => {
    expect(player).toEqual({"h": 10, "w": 10, "x": 395, "y": 295, "speed": 2})
  });

  describe('.isAtBoundary', () => {
    it('returns false if the player is not at the game boundary', () => {
      expect(player.isAtBoundary(width, height)).toEqual(false)
    })

    it('returns true if the player is at the game boundary', () => {
      player.x = -1
      expect(player.isAtBoundary(width, height)).toEqual(true)
    })
  })

  describe('.moveFromBoundary', () => {
    it('moves player away from top boundary', () => {
      player.x = -1
      player.moveFromBoundary(width, height)
      expect(player.x).toEqual(1)
    })
    it('moves player away from bottom boundary', () => {
      player.x = 801
      player.moveFromBoundary(width, height)
      expect(player.x).toEqual(799)
    })
    it('moves player away from left boundary', () => {
      player.y = -1
      player.moveFromBoundary(width, height)
      expect(player.y).toEqual(1)
    })
    it('moves player away from right boundary', () => {
      player.y = 601
      player.moveFromBoundary(width, height)
      expect(player.y).toEqual(599)
    })
  })
});
