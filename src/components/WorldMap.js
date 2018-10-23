import React, { PureComponent } from 'react';
import "./worldmap.css"
import CityLink from "./CityLink.js";
import Cell from "./Cell.js";
import Loading from './Loading';
import TheWorld from '../TheWorld';

function InitialGrid() {
  return TheWorld;
}

class WorldMap extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      grid: props.map || InitialGrid(),
      ticker: props.ticker,
      renderGrid : [],
      loading: true,
      paused: false,
      hour:0
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 600)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
    this.props.updateAppMap(this.state.grid, this.state.ticker)
  }

  tick() {
    this.setState({ticker: this.state.ticker +1})
    this.incrementHour();
    this.populateGrid();
  }

  pauseGame() {
    if (this.state.paused) {
      this.interval = setInterval(() => this.tick(), 1000)
    } else {
      clearInterval(this.interval)
    }
    this.setState({paused: !this.state.paused})
  }

  incrementHour() {
    if(this.state.ticker % 60 === 0 && this.state.ticker > 0) {
      this.setState({hour: this.state.hour +1})
    } 
  }

  populateGrid() {
    var populatedGrid =
    this.state.grid.map((row, rowIndex) => (
      row.map((cell, index) => {
          if (cell > 0 && Math.random() < 0.05 && this.checkNeighbours(rowIndex, index)) {
            return cell*(-1);
          } else if (cell > 0 && this.props.flyingZombies && Math.random() < 0.001 && this.state.ticker % 10 === 0) {
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
    if (row === 0 || row === this.state.grid.length-1) {
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
          } else if (cell !== "END") {
            if (this.checkNeighbours(rowIndex, index) === true) {
              this.props.activateCity(cell);
            }
            return <CityLink key={index} city={cell} active={this.checkNeighbours(rowIndex, index)}/>; 
          } else {
            this.setState({loading: false})
            return null
          }
        })
      ))
    )
  }

  render() {
    

    if (this.state.loading) {
      return (
        <div>
          <div id="loading-screen">
            <Loading city={this.state.city} />
          </div>
        </div>
        
      );
    }
    return (
      <div>
        <h1 id="map-title">World Map</h1>

        
        <div id="time">Time:{this.state.hour + 12}:{this.state.ticker - (this.state.hour * 60) <10 ? "0":null}{this.state.ticker - (this.state.hour * 60)}</div>

          <div className="grid">
            {this.state.renderGrid}
          </div>
        <button id="pause" onClick={() => { this.pauseGame() }}>Pause</button>
        <p>
          {this.state.paused ? <div id="pause-indicator">paused</div> : null}
        </p>
      </div>
    );
  }
}

export default WorldMap;
