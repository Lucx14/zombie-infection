import React, { Component } from 'react';
import "./worldmap.css"
import CityLink from "./CityLink.js";
import Cell from "./Cell.js";


class WorldMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: Array(35).fill(Array(50).fill(0))
    }
  }

  componentDidMount() {
    this.populateGrid()
  }

  populateGrid() {
    var populatedGrid =
    this.state.grid.map((row, rowIndex) => (
      row.map((x, index) => (
        <Cell thing={x} key={index} index={index + rowIndex}/>
      ))
    ))
    populatedGrid[0][4] = <CityLink city="London" key="london"/>
    populatedGrid[3][1] = <CityLink city="Oxford" key="oxford"/>
    this.setState({grid: populatedGrid})
  }

  render() {
    return (
      <div>
        <h1>
          World Map
        </h1>
        <div className="world-map">
          <div className="grid">
            {this.state.grid}
          </div>
        </div>
      </div>
    );
  }
}

export default WorldMap;
