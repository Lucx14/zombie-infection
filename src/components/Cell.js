import React, { Component } from 'react';
import "./worldmap.css";
import PropTypes from 'prop-types';

class Cell extends Component {

  determineClass() {
    // let cellClass;
    
    if (this.props.infected) {
      return "infected"
    }
    return "cell"
  }

  render() {
    return(
      <div
        className={this.determineClass()}
        value={this.props.thing} 
        key={this.props.index}
      >   
      </div>
    )}
}



Cell.propTypes = {
  index: PropTypes.number,
  infected: PropTypes.bool,
  thing: PropTypes.number
};

export default Cell;
