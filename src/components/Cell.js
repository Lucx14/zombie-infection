import React, { Component } from 'react';
import "./worldmap.css"

class Cell extends Component {

  determineClass() {
    let cellClass;
    if (this.props.infected) {
      return "infected"
    }
    return this.props.index % 2 === 0 ? "cell" : "cell-alt"
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

export default Cell;
