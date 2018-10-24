import React, { PureComponent } from 'react';
import "./worldmap.css"
import CityLink from "../components/CityLink.js";
import Cell from "../components/Cell.js";
import Loading from '../components/Loading';
import TheWorld from '../model/TheWorld';
import PropTypes from 'prop-types';
import populations from '../model/Populations'

class WorldMap extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      grid: props.map || TheWorld,
      ticker: props.ticker,
      renderGrid : [],
      loading: true,
      paused: false,
      infectionChance: 0.01,
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
    if (this.props.worldWarZ) {
      this.setState({infectionChance: 0.5})

    }
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
          if (cell > 0 && Math.random() < this.state.infectionChance && this.checkNeighbours(rowIndex, index)) {
            return cell*(-1);
          } else if (cell > 0 && this.props.flyingZombies && Math.random() < (this.state.infectionChance * 0.1) && this.state.ticker % 10 === 0) {
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
    ) {
      return true;
    } else if (
      this.props.fishFrenzy && Math.random() < 0.005 &&
      [this.state.grid[row-1][col-1], 
      this.state.grid[row-1][col],
      this.state.grid[row-1][col+1],
      this.state.grid[row][col-1],
      this.state.grid[row][col+1],
      this.state.grid[row+1][col-1],
      this.state.grid[row+1][col],
      this.state.grid[row+1][col+1]].filter(x => x===0).length > 4) {
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
              return this.renderCell(index, cell);
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

  renderCell(index, cell) {
    return <Cell key={index} land={cell} />;
  }

  infectionData(i) {
    const allContinents = [null,"northAmerica", "southAmerica", "europe", "africa", "asia", "oceana", "middleEast"];
    return (
     populations[allContinents[i]] - Math.floor(populations[allContinents[i]]*this.infectedPopulations(i)*0.01)
    );
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
          <p>North America: Infected: {this.infectedPopulations(1)}%, Survivors: {this.infectionData(1)}</p>
          <p>South America: Infected: {this.infectedPopulations(2)}%, Survivors: {this.infectionData(2)}</p>
          <p>Europe: Infected: {this.infectedPopulations(3)}%, Survivors: {this.infectionData(3)}</p>
          <p>Africa: {this.infectedPopulations(4)}%, Survivors: {this.infectionData(4)}</p>
          <p>Asia: {this.infectedPopulations(5)}%, Survivors: {this.infectionData(5)}</p>
          <p>Oceana: {this.infectedPopulations(6)}%, Survivors: {this.infectionData(6)}</p>
          <p>Middle East: {this.infectedPopulations(7)}%, Survivors: {this.infectionData(7)}</p>
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
