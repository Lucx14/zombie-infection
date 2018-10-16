import React, { Component } from 'react';
import "./worldmap.css"

class Cell extends Component {
  render() {
    return(
      <div
        className={this.props.index % 2 === 0 ? "cell" : "cell-alt"}
        value={this.props.thing} 
        key={this.props.index}
      >   
      </div>
    )}
}

export default Cell;
