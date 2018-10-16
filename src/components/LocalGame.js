import React, { Component } from 'react';
import "./LocalGame.css"

class LocalGame extends Component {

  render() {
    return (
      <div>
        <h1><center>Local Map</center></h1>
        <div id = "holder">
          <canvas id="canvas" width="800" height="600" tabIndex='1'></canvas>
        </div>
      </div>
    );
  };
};

export default LocalGame;
