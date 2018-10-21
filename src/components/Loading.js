import React, { Component } from 'react';
import "./worldmap.css";
import PropTypes from 'prop-types';

class Loading extends Component {

  render() {
    return (
      <div>
        <h1>Loading...{this.props.city}</h1>
      </div>
    );
  }
}


Loading.propTypes = {
  city: PropTypes.string
};

export default Loading;
