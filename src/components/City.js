import React, { Component } from 'react';
import "./worldmap.css"

class City extends Component {

  render() {
    return (
      <div>
        <h1>{this.props.city}</h1>
      </div>
    );
  }
}

export default City;
