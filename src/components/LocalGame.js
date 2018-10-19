import React, { Component } from 'react';
import LocalGameModel from "../model/LocalGameModel.js"
import "./LocalGame.css"

class LocalGame extends Component {

  componentDidMount() {
    var localGameModel = new LocalGameModel();
    localGameModel.eventListen();
    localGameModel.tickDraw();
    document.getElementById("canvas").focus();
  }

  render() {
    return (
      <div>
        <h1><center>Local Map</center></h1>
        <div id = "holder">
          <canvas id="canvas" width="800" height="600" tabIndex='1'></canvas>
        </div>
      </div>
    );
  }
}

export default LocalGame;
