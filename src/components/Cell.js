import React, { PureComponent } from 'react';
import "./worldmap.css";
import PropTypes from 'prop-types';

class Cell extends PureComponent {

  determineClass() {
    if (this.props.land < 0) { 
      return "infected" 
    } else { 
      switch (this.props.land) {
        case 5: return "land asia";
        case 1: return "land north-america";
        case 3: return "land europe";
        case 4: return "land africa";
        case 2: return "land south-america";
        case 7: return "land middle-east";
        default: return "land oceana";
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
  land: PropTypes.number
};

export default Cell;
