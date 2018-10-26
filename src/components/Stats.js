import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './app.css'
import './stats.css'

class Stats extends Component {
  increaseStat(ability) {
    this.props.increaseStat(ability);
  }

  clickCityNoise(audioFile, audio = new Audio(audioFile)) {
    audio.play();
  }

  render() {
    const level = this.props.playableCities.length

    return (
      <div>
        <div id="stats-grid">
          <div id="in-game-stats">
            <h1>STATS</h1>
            <h2 id="tokens">Tokens: {this.props.tokens}</h2>
            <h3 className="stat-margin">Speed: {this.props.speed}</h3>
              <button onClick={() => { this.increaseStat("speed") }} id="speedUp" className={this.props.tokens > 0 ? "unlocked" : "locked"}>+</button>
            <h3 className="stat-margin">Resilience: {this.props.resilience}</h3>
              <button onClick={() => { this.increaseStat("resilience") }} id="resilienceUp" className={this.props.tokens > 0 ? "unlocked" : "locked"}>+</button>
            <h3 className="stat-margin">Aggression: {this.props.aggression}</h3>
              <button onClick={() => { this.increaseStat("agression") }} id="aggressionUp" className={this.props.tokens > 0 ? "unlocked" : "locked"}>+</button>
          </div>
          <h2>SPECIAL ABILITIES</h2>
          <div id="special-ability-section" >
          <div id="fish-frenzy" className="special-ability-box">
            <img src="./fishicon_360.png" alt="fish frenzy"></img>
            <h4>FISH FRENZY </h4>
            <h6>(30 Tokens)</h6>
            <p className="ability-desc">Zombie infection spreads to the seas! Allows for infection spread across water. Unlocked after 12 cities destroyed.</p>
              <button onClick={() => { this.props.specialAbility("fishFrenzy") }} className={level > 11 ? "unlocked" : "locked"} id="fishFrenzy">
                {level > 11 ? "Buy" : "Locked"}
              </button>
          </div>
          <div id="death-from-above" className="special-ability-box">
            <img src="./flyingicon_360.png" alt="death from above"></img>
            <h4>DEATH FROM ABOVE</h4>
            <h6>(40 Tokens)</h6>
            <p className="ability-desc">Infection becomes airborne! Birds can now carry the Zombie infection across land and sea. Unlocked after 18 cities destroyed.</p>
              <button onClick={() => { this.props.specialAbility("flyingZombies") }} className={level > 17 ? "unlocked" : "locked"} id="flyingZombies">
                {level > 17 ? "Buy" : "Locked"}
              </button>
          </div>
          <div id="world-war-z" className="special-ability-box">
            <img src="./wwzicon_360.png" alt="world war z"></img>
            <h4>WORLD WAR Z</h4>
            <h6>(50 Tokens)</h6>
            <p className="ability-desc">Send the infection spread into overdrive. Unlocked after 24 cities destroyed.</p>
              <button onClick={() => { this.props.specialAbility("worldWarZ") }} className={level > 23 ? "unlocked" : "locked"} id="worldWarZ">
                {level > 23 ? "Buy" : "Locked"}
              </button>
          </div>
          </div>
          <button onClick={() => { this.clickCityNoise("./soundEffects/buttonPress.mp3"); this.props.done() }} id="done" className="center start-button">Done</button>
        </div>
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
