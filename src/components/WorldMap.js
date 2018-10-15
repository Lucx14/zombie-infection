import React, { Component } from 'react';

class WorldMap extends Component {
  render() {
    return (
      <div>
        <h1>World Map</h1>
        
        <canvas className="world-map">
          <button className="city-button">London</button>
          <button className="city-button">Oxford</button>
        </canvas>
        
      </div>
    );
  }
}

export default WorldMap;
