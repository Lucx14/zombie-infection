import React, { Component } from 'react';
import City from './City.js';
import WorldMap from './WorldMap';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class CityLink extends Component {
  cityRoute() {
    return `/${this.props.city.toLowerCase()}`
  }

  render() {
    return (
      <div>
        <button className="city-button" href={this.cityRoute()}>
          {this.props.city}
        </button>
      </div>
    )
  }
}

export default CityLink;
