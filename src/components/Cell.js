import React, { Component } from 'react';
import "./worldmap.css"

class Cell extends Component {

  determineClass() {

    if (this.props.land) {
      return "land"
    }
    return "cell"
  }

  render() {
    return(
      <div
        className={this.determineClass()}
        key={this.props.index}
      >   
      </div>
    )}
}

export default Cell;
