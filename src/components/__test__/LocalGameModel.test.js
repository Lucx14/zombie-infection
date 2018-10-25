import React from 'react';
import LocalGameModel from '../../model/LocalGameModel.js'

describe('LocalGameModel', () => {

  var localGameModel
  var mockPlayer

  beforeEach(() => {

    const createElement = document.createElement.bind(document);
    const mockCanvasDraw = {
      fillStyle: "",
      clearRect: () => {},
      beginPath: () => {},
      rect: () => {},
      fill: () => {},
      setTransform: () => {},
      translate: () => {},
      scale: () => {},
      drawImage: () => {}
    };

    document.getElementById = (tagName) => {
        if (tagName === 'canvas' || tagName === 'underCanvas') {
            return {
                getContext: () => (mockCanvasDraw),
                addEventListener: () => ({}),
                focus: () => ({}),
                width: 800,
                height: 600,
            };
        } else if (tagName == 'timer' || tagName == 'zombie-count') {
            return {
              innerHTML: ""
            }
        }
    };

    function mockPlayer() {
      this.x = 395
      this.y = 295
      this.w = 10
      this.h = 10
      this.speed = 2

      this.isAtBoundary = function() { return false }
      this.moveUp = function() { this.y -= this.speed }
      this.moveDown = function() { this.y += this.speed }
      this.moveLeft = function() { this.x -= this.speed }
      this.moveRight = function() { this.x += this.speed }
    }

    function mockSounds() {
      this.zombieBite = function() {"zombieBite"}
      this.scream = function() {"scream"}
    }

    function mockNpc() {
      this.x = 390
      this.y = 290
      this.w = 10
      this.h = 10
    }

    localGameModel = new LocalGameModel(0, 0, 0,new mockPlayer(), new mockNpc(), new mockSounds())

  });

  it('instantiates with game speed', () => {
    expect(localGameModel.gameSpeed).toEqual(15)
  });

  it('instantiates with keys pressed storage', () => {
    expect(localGameModel._keys).toEqual([])
  });

  describe("eventListener", () => {
    it('turns on event listener', () => {
      expect(localGameModel.eventListen()).toEqual("keystroke listeners activated")
    })
  })

  describe("tickDraw", () => {
    it('keystroke', () => {
      expect(localGameModel.tickDraw()).toEqual("new frame")
    })
  })

  describe("_playerMovement", () => {
    it("keystroke 'w'", () => {
      localGameModel._keys[87] = true
      localGameModel._playerMovement()
      expect(localGameModel._player.y).toEqual(293)
    })

    it("keystroke 's'", () => {
      localGameModel._keys[83] = true
      localGameModel._playerMovement()
      expect(localGameModel._player.y).toEqual(297)
    })

    it("keystroke 'a'", () => {
      localGameModel._keys[65] = true
      localGameModel._playerMovement()
      expect(localGameModel._player.x).toEqual(393)
    })

    it("keystroke 'd'", () => {
      localGameModel._keys[68] = true
      localGameModel._playerMovement()
      expect(localGameModel._player.x).toEqual(397)
    })
  })

  it('running _mainDraw', () => {
    expect(localGameModel._mainDraw()).toEqual("main draw run")
  })
});
