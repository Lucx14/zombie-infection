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
        <img id="background" src="level1.gif" alt="" style={{display: "none"}}/>
        <img id="zombie" src="zombie.png" alt="" style={{display: "none"}}/>
        <img id="army" src="army.png" alt="" style={{display: "none"}}/>
        <img id="police" src="police.png" alt="" style={{display: "none"}}/>
        <img id="person1" src="person-1.png" alt="" style={{display: "none"}}/>
        <img id="person2" src="person-2.png" alt="" style={{display: "none"}}/>
        <img id="person3" src="person-3.png" alt="" style={{display: "none"}}/>
        <img id="person4" src="person-4.png" alt="" style={{display: "none"}}/>
        <img id="person5" src="person-5.png" alt="" style={{display: "none"}}/>
        <img id="bloodsplat" src="bloodSplat.png" alt="" style={{display: "none"}}/>
        <h1><center>Local Map</center></h1>
        <div id = "holder">
          <canvas id="underCanvas" width="800" height="600" tabIndex='1'></canvas>
          <canvas id="canvas" width="800" height="600" tabIndex='1'></canvas>
        </div>
      </div>
    );
  }
}

export default LocalGame;
