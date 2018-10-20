import React, { PureComponent } from 'react';
import {
  NavLink,
  HashRouter
} from "react-router-dom";
import PropTypes from 'prop-types';

class CityLink extends PureComponent {
  // Entry point for town entry logic
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
            <div className={this.determineClass()} key={this.props.index}>
              {this.props.city}
            </div>
          </NavLink>
        </div>
      </HashRouter>
    )
  }
}


CityLink.propTypes = {
  city: PropTypes.string,
  index: PropTypes.number
};

export default CityLink;
