import React, { Component } from 'react';
import {
  NavLink,
  HashRouter
} from "react-router-dom";
import PropTypes from 'prop-types';

class CityLink extends Component {
  // Entry point for town entry logic
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

// double check that these prop validations are correct - as it is now all tests and the game build run correctly
CityLink.propTypes = {
  city: PropTypes.string,
  index: PropTypes.number
};

export default CityLink;
