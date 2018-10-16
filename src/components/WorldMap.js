import React, { Component } from 'react';
import "./worldmap.css"

class WorldMap extends Component {
  render() {
    return (
      <div>
        <h1>World Map</h1>
        <div className="world-map"></div>
        <button className="city-button">London</button>
        <button className="city-button">Oxford</button>
      </div>
    );
  }
}

export default WorldMap;
