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

  describe('player movement', () => {
    describe('.moveUp', () => {
      it('reduces player y coordinate by player speed', () => {
        let player_y = player.y
        expect(player.moveUp()).toEqual(player_y - player.speed)
      })
    })
    describe('.moveDown', () => {
      it('increases player y coordinate by player speed', () => {
        let player_y = player.y
        expect(player.moveDown()).toEqual(player_y + player.speed)
      })
    })
    describe('.moveLeft', () => {
      it('reduces player x coordinate by player speed', () => {
        let player_x = player.x
        expect(player.moveLeft()).toEqual(player_x - player.speed)
      })
    })
    describe('.moveRight', () => {
      it('increases player y coordinate by player speed', () => {
        let player_x = player.x
        expect(player.moveRight()).toEqual(player_x + player.speed)
      })
    })
  })

  describe('.coordinates', () => {
    it('returns the players current coordinates', () => {
      expect(player.coordinates()).toEqual([player.x, player.y])
    })
  })
});
