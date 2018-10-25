import React, { Component } from 'react';
import LocalGameModel from "../model/LocalGameModel.js";
import "./LocalGame.css";
import PropTypes from 'prop-types';

class LocalGame extends Component {
  componentDidMount() {
    var localGameModel = new LocalGameModel(this.props.speed,
                                            this.props.resilience,
                                            this.props.aggression)
    localGameModel.eventListen();
    localGameModel.tickDraw();
    document.getElementById("canvas").addEventListener('keydown',
      function() {
        if (localGameModel.gameEnd === true) {
          this.props.endGame(localGameModel._zombieCount)
        }
      }.bind(this));
  }

  formatCityName(city) {
    var cityName = city.split('-');
    for (var i=0; i<cityName.length; i++) {
      cityName[i] = cityName[i].charAt(0).toUpperCase() + cityName[i].slice(1);
    }
    return cityName.join(' ');
  }

  render() {
    return (
      <div>
        <img id="level1" src="level1.jpg" alt="" style={{display: "none"}}/>
        <img id="level2" src="level2.jpg" alt="" style={{display: "none"}}/>
        <img id="level3" src="level3.jpg" alt="" style={{display: "none"}}/>
        <img id="level4" src="level4.jpg" alt="" style={{display: "none"}}/>
        <img id="zombie" src="zombie.png" alt="" style={{display: "none"}}/>
        <img id="player-zombie" src="playerZombie.png" alt="" style={{display: "none"}}/>
        <img id="zombie-dead" src="zombieDead.png" alt="" style={{display: "none"}}/>
        <img id="army" src="army.png" alt="" style={{display: "none"}}/>
        <img id="police" src="police.png" alt="" style={{display: "none"}}/>
        <img id="person1" src="person-1.png" alt="" style={{display: "none"}}/>
        <img id="person2" src="person-2.png" alt="" style={{display: "none"}}/>
        <img id="person3" src="person-3.png" alt="" style={{display: "none"}}/>
        <img id="person4" src="person-4.png" alt="" style={{display: "none"}}/>
        <img id="person5" src="person-5.png" alt="" style={{display: "none"}}/>
        <img id="bloodsplat" src="bloodSplat.png" alt="" style={{display: "none"}}/>
        <div id = "holder">
          <p id="city">{this.formatCityName(this.props.city)}</p>
          <canvas id="underCanvas" width="800" height="600"></canvas>
          <canvas id="canvas" width="800" height="600" tabIndex='1'></canvas>
          <p id="timer"></p>
          <p id="zombie-count"></p>
          <p id="local-game-over"></p>
          <p id="end-message"></p>
        </div>
      </div>
    );
  }
}


LocalGame.propTypes = {
  endGame: PropTypes.func,
};

export default LocalGame;
