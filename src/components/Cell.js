import React, { Component } from 'react';
import "./worldmap.css"

class Cell extends Component {

  determineClass() {

    if (this.props.land === 0) {
      return "sea"
    } else if (this.props.land === 1) {
      return "north-america"
    } else if (this.props.land === 2) {
      return "south-america"
    } else if (this.props.land === 3) {
      return "europe"
    } else if (this.props.land === 4) {
      return "africa"
    } else if (this.props.land === 5) {
      return "asia"
    } else if (this.props.land === 6) {
      return "oceana"
    } else if (this.props.land === 7) {
      return "middle-east"
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

export default Cell;
