import React, { Component } from 'react';
import "./worldmap.css";
import PropTypes from 'prop-types';

class Cell extends Component {

  determineClass() {
    if (this.props.land < 0) { 
      return "infected" 
    } else { 
      switch (this.props.land) {
        case 0: return "sea";
        case 5: return "asia";
        case 1: return "north-america";
        case 3: return "europe";
        case 4: return "africa";
        case 2: return "south-america";
        case 7: return "middle-east";
        default: return "oceana";
      }
    }
  }

  render() {
    return(
        <div
          className={this.determineClass()}
          key={this.props.index}>   
        </div>
    )}
}

Cell.propTypes = {
  index: PropTypes.number,
  infected: PropTypes.bool,
  thing: PropTypes.number
};

export default Cell;
