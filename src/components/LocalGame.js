import React, { Component } from 'react';
import LocalGameModel from "../model/LocalGameModel.js"
import "./LocalGame.css"

class LocalGame extends Component {

  componentDidMount() {
    var localGameModel = new LocalGameModel();
    localGameModel.eventListen();
    localGameModel.tickDraw();
  }

  render() {
    return (
      <div>
        <button onClick={() => { this.props.clearCity()} }>Go Back</button>
        <h1><center>{this.props.city}</center></h1>
        <div id = "holder">
          <canvas id="canvas" width="800" height="600" tabIndex='1'></canvas>
        </div>
      </div>
    );
  }
}

export default LocalGame;
