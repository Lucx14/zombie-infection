import React, { Component } from 'react';
import {
  NavLink,
  HashRouter
} from "react-router-dom";

class CityLink extends Component {
  cityRoute() {
    if (this.props.active) {
      return `/${this.props.city.toLowerCase()}`
    }
    return '/'
  }

  determineClass() {
    if (this.props.active) {
      return "clickable"
    }
    return "unclickable"
  }

  render() {
    return (
      <HashRouter>
        <div className="city-link">
          <NavLink to={this.cityRoute()}>
            <button className={this.determineClass()} key={this.props.index}>
              {this.props.city}
            </button>
          </NavLink>
        </div>
      </HashRouter>
    )
  }
}

export default CityLink;
