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
      <HashRouter>
        <div className="city-link">
          <NavLink to={this.cityRoute()}>
            <button className="city-button" key={this.props.index}>
              {this.props.city}
            </button>
          </NavLink>
        </div>
      </HashRouter>
    )
  }
}

export default CityLink;
