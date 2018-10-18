import React from 'react';
import LocalGameModel from '../../model/LocalGameModel.js'

describe('LocalGameModel', () => {

  var localGameModel
  var mockPlayer

  beforeEach(() => {

    const createElement = document.createElement.bind(document);

    document.getElementById = (tagName) => {
        if (tagName === 'canvas') {
            return {
                getContext: () => ({}),
                addEventListener: () => ({}),
                width: 800,
                height: 600
            };
        }
        return getElementById(tagName);
    };

    function mockPlayer() {
      this.x = 395
      this.y = 295
      this.w = 10
      this.h = 10
    }

    localGameModel = new LocalGameModel(new mockPlayer())

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
      expect(localGameModel._player.y).toEqual(294)
    })

    it("keystroke 's'", () => {
      localGameModel._keys[83] = true
      localGameModel._playerMovement()
      expect(localGameModel._player.y).toEqual(296)
    })

    it("keystroke 'a'", () => {
      localGameModel._keys[65] = true
      localGameModel._playerMovement()
      expect(localGameModel._player.x).toEqual(394)
    })

    it("keystroke 'd'", () => {
      localGameModel._keys[68] = true
      localGameModel._playerMovement()
      expect(localGameModel._player.x).toEqual(396)
    })
  })

});
