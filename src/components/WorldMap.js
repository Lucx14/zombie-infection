import React, { PureComponent } from 'react';
import "./worldmap.css"
import CityLink from "./CityLink.js";
import Cell from "./Cell.js";
import Loading from './Loading';
import TheWorld from '../TheWorld';
import PropTypes from 'prop-types';

function populations() {
  return { 
    "northAmerica": 579000000,
    "southAmerica": 422500000, 
    "europe": 742648010, 
    "africa": 1287920518, 
    "asia": 4134133094, 
    "oceana": 41261212, 
    "middleEast": 411000000}
}

class WorldMap extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      grid: props.map || TheWorld,
      ticker: props.ticker,
      renderGrid : [],
      loading: true,
      paused: false,
      hour: 0,
    }
  }

  infectedPopulations(continent) {
    const map = this.state.grid;
    let infection = (map.flat().filter(function(x){ return x === -continent }).length)
    let total = (map.flat().filter(function(x){ return Math.abs(x) === continent }).length)
    return Math.floor(infection*100/total);
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000)
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
          if (cell > 0 && Math.random() < 0.5 && this.checkNeighbours(rowIndex, index)) {
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
        <div id="world-population-stats">
          <p>North America: Infected: {this.infectedPopulations(1)}%, Survivors: {populations()["northAmerica"] - Math.floor(populations()["northAmerica"]*this.infectedPopulations(1)*0.01)}</p>
          <p>South America: Infected: {this.infectedPopulations(2)}%, Survivors: {populations()["southAmerica"] - Math.floor(populations()["southAmerica"]*this.infectedPopulations(2)*0.01)}</p>
          <p>Europe: Infected: {this.infectedPopulations(3)}%, Survivors: {populations()["europe"] - Math.floor(populations()["europe"]*this.infectedPopulations(3)*0.01)}</p>
          <p>Africa: {this.infectedPopulations(4)}%, Survivors: {populations()["africa"] - Math.floor(populations()["africa"]*this.infectedPopulations(3)*0.01)}</p>
          <p>Asia: {this.infectedPopulations(5)}%, Survivors: {populations()["asia"] - Math.floor(populations()["asia"]*this.infectedPopulations(4)*0.01)}</p>
          <p>Oceana: {this.infectedPopulations(6)}%, Survivors: {populations()["oceana"] - Math.floor(populations()["oceana"]*this.infectedPopulations(6)*0.01)}</p>
          <p>Middle East: {this.infectedPopulations(7)}%, Survivors: {populations()["middleEast"] - Math.floor(populations()["middleEast"]*this.infectedPopulations(7)*0.01)}</p>
        </div>
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


WorldMap.propTypes = {
  ticker: PropTypes.number,
  flyingZombies: PropTypes.bool,
  updateAppMap: PropTypes.func,
  activateCity: PropTypes.func,
  map: PropTypes.array
};

export default WorldMap;
