import React, { PureComponent } from 'react';
import "./worldmap.css"
import CityLink from "./CityLink.js";
import Cell from "./Cell.js";
import TheWorld from '../TheWorld';

function InitialGrid() {
  return TheWorld;
}

class WorldMap extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      grid: props.grid || InitialGrid(),
      ticker: -1,
      renderGrid : []
    }
  }

  componentDidMount() {
    this.setState({ticker: this.state.ticker +1})
    this.interval = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  tick() {
    this.setState({ticker: this.state.ticker +1})
    this.populateGrid();
  }

  populateGrid() {
    var populatedGrid =
    this.state.grid.map((row, rowIndex) => (
      row.map((cell, index) => {
          if (cell > 0 && Math.random() < 1 && this.checkNeighbours(rowIndex, index)) {
            return cell*(-1);
          } else {
            return cell;
          }
      })
    ))
    this.setState({grid: populatedGrid})
    this.setState({renderGrid: this.renderGrid()})
  }

  checkNeighbours(row, col) {
    if (row === 0 || row === 119) {
      return false;
    } else if (
      this.state.grid[row-1][col-1] < 0 ||
      this.state.grid[row-1][col] < 0 ||
      this.state.grid[row-1][col+1] < 0 ||
      this.state.grid[row][col-1] < 0 ||
      this.state.grid[row][col+1] < 0 ||
      this.state.grid[row+1][col-1] < 0 ||
      this.state.grid[row+1][col] < 0 ||
      this.state.grid[row+1][col+1] < 0
    ){
      return true;
    }
  }

  renderGrid() {
    return (
      this.state.grid.map((row, rowIndex) => (
        row.map((cell, index) => {
          if (typeof cell == 'number'){
            if (cell===0){
              return <div className="sea" key={index} />;
            } else {
              return <Cell key={index} land={cell}/>;
            }
          } else {
            return <CityLink key={index} city={cell} active={this.checkNeighbours(rowIndex, index)}/>;
          }
        })
      ))
    )
  }

  render() {
    return (
      <div>
        <h1>
          <center>
            World Map
            {this.state.ticker}
          </center>
        </h1>
          <div className="grid">
            {this.state.renderGrid}
          </div>
      </div>
    );
  }
}

export default WorldMap;
