import React, { Component } from 'react';
import City from "./City.js";
import "./worldmap.css"
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

class WorldMap extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>
            World Map
          </h1>
          <div className="world-map">
            <button className="city-button"><NavLink to="/london">London</NavLink></button>
            <button className="city-button"><NavLink to="/oxford">Oxford</NavLink></button>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default WorldMap;
