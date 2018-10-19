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


City.propTypes = {
  city: PropTypes.string
};

export default City;
