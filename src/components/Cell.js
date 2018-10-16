import React, { Component } from 'react';
import "./worldmap.css"

class Cell extends Component {
  render() {
    return(
      <button 
        className="cell" 
        value={this.props.thing} 
        key={this.props.index}>   
      </button>
    )}
}

export default Cell;
