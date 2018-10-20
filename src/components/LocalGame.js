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
        <img id="background" src="level1.gif" style={{display: "none"}}/>
        <img id="zombie" src="zombie.png" style={{display: "none"}}/>
        <img id="army" src="army.png" style={{display: "none"}}/>
        <img id="police" src="police.png" style={{display: "none"}}/>
        <img id="person1" src="person-1.png" style={{display: "none"}}/>
        <img id="person2" src="person-2.png" style={{display: "none"}}/>
        <img id="person3" src="person-3.png" style={{display: "none"}}/>
        <img id="person4" src="person-4.png" style={{display: "none"}}/>
        <img id="person5" src="person-5.png" style={{display: "none"}}/>
        <h1><center>Local Map</center></h1>
        <div id = "holder">
          <canvas id="canvas" width="800" height="600" tabIndex='1'></canvas>
        </div>
      </div>
    );
  }
}

export default LocalGame;
