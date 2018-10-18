import React, { Component } from 'react';
import "./worldmap.css";
import PropTypes from 'prop-types';

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

// double check that these prop validations are correct - as it is now all tests and the game build run correctly
City.propTypes = {
  city: PropTypes.string
};

export default City;
