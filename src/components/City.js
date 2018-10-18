import React, { Component } from 'react';
import "./worldmap.css"

class City extends Component {
  // cityRoute() {
  //   return `/${this.props.city}`
  // }

  render() {
    return (
      <div>
        <h1>{this.props.city}</h1>
      </div>
    );
  }
}

export default City;
