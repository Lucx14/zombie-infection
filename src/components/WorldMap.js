import React, { Component } from 'react';
import "./worldmap.css"
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import City from "./City.js";
import CityLink from "./CityLink.js";
import Cell from "./Cell.js";


class WorldMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: Array(5).fill(Array(5).fill(0))
    }
  }

  componentDidMount() {
    this.populateGrid()
  }

  populateGrid() {
    var populatedGrid = 
    this.state.grid.map((row) => (
      row.map((x, index) => (
        <Cell thing={x} key={index}/> 
      ))
    ))
    populatedGrid[0][4] = <CityLink city="London"/>
    populatedGrid[3][1] = <CityLink city="Oxford"/>
    this.setState({grid: populatedGrid})
  }

  render() {
    return (
      <HashRouter>
        <div>
          <h1>
            World Map
          </h1>
          <div className="world-map">
            {/* <button className="city-button"><NavLink to="/london">London</NavLink></button>
            <button className="city-button"><NavLink to="/oxford">Oxford</NavLink></button> */}
            <div className="grid">
              {this.state.grid}
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default WorldMap;
