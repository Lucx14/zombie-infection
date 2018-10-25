import React, { Component } from 'react';
import "./game-over.css";
import PropTypes from 'prop-types';

class GameOver extends Component {
  render() {
    return (
      <div>
        <div id="black-screen" >
        <div className="scroll-up">
          <h1>Game Over</h1>
          <h5>YOUR SCORE: </h5>
          <h4>TRICK OR EAT BRAINS</h4>
          <h6>Dev Team</h6>
          <p>James Sutherland</p>
          <p>Josh Nickson</p>
          <p>Lucien Najev</p>
          <p>Malachy Gilchrist</p>
          <h6>Music</h6>
          <p>Ross Budgen</p>
        </div>
        </div>
      </div>
    );
  }
}

GameOver.propTypes = {
  score: PropTypes.number
};

export default GameOver;
