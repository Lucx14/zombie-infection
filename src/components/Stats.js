import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './app.css'

class Stats extends Component {

  render() {
    const level = this.props.playableCities.length 
    return (
      <div>
          <h1>Stats</h1>
          <h2>Tokens: {this.props.tokens}</h2>
          <h3>Speed: {this.props.speed}</h3>
            <button onClick={() => { this.props.increaseStat("speed") }} id="speedUp" className={this.props.tokens > 0 ? "unlocked" : "locked"}>+</button>
          <h3>Resilience: {this.props.resilience}</h3>
            <button onClick={() => { this.props.increaseStat("resilience") }} id="resilienceUp" className={this.props.tokens > 0 ? "unlocked" : "locked"}>+</button>
          <h3>Aggression: {this.props.aggression}</h3>
            <button onClick={() => { this.props.increaseStat("agression") }} id="aggressionUp" className={this.props.tokens > 0 ? "unlocked" : "locked"}>+</button>
          <h3>SPECIAL ABILITIES:</h3>
          <h3>FISH FRENZY (20 Tokens)</h3>
          <p className="ability-desc">Zombie infection spreads to the seas! Allows for infection spread across water. Unlocked after 18 cities destroyed.</p>
            <button onClick={() => { this.props.specialAbility("fishFrenzy") }} className={level > 17 ? "unlocked" : "locked"}>
              {level > 17 ? "Buy" : "Locked"}
            </button>
          <h3>FLYING ZOMBIES (30 Tokens)</h3>
          <p className="ability-desc">Zombies gain the intelligence to slip past airport security and board flights unnoticed. Unlocked after 12 cities destroyed.</p>
            <button onClick={() => { this.props.specialAbility("flyingZombies") }} className={level > 11 ? "unlocked" : "locked"}>
              {level > 11 ? "Buy" : "Locked"}
            </button>
          <h3>WORLD WAR Z (40 Tokens)</h3>
          <p className="ability-desc">Send the infection spread into overdrive. Unlocked after 24 cities destroyed.</p>
            <button onClick={() => { this.props.specialAbility("worldWarZ") }} className={level > 23 ? "unlocked" : "locked"}>
              {level > 23 ? "Buy" : "Locked"}
            </button>
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
