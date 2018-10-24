import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './app.css'

class Stats extends Component {

  render() {
    return (
      <div>
          <h1>Stats</h1>
          <h2>Tokens: {this.props.tokens}</h2>
          <h3>Speed: {this.props.speed}</h3>
            <button onClick={() => { this.props.increaseStat("speed") }} id="speedUp">+</button>
          <h3>Resilience: {this.props.resilience}</h3>
            <button onClick={() => { this.props.increaseStat("resilience") }} id="resilienceUp">+</button>
          <h3>Aggression: {this.props.aggression}</h3>
            <button onClick={() => { this.props.increaseStat("agression") }} id="aggressionUp">+</button>
          <button onClick={() => { this.props.done() }}>Done</button>
      </div>
    );
  }
}

Stats.propTypes = {
  speed: PropTypes.number,
  resilience: PropTypes.number,
  aggression: PropTypes.number,
  increaseStat: PropTypes.func,
  done: PropTypes.func,
};

export default Stats;
