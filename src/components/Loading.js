import React, { Component } from 'react';
import "./loading.css";
import PropTypes from 'prop-types';

class Loading extends Component {

  render() {
    return (
      <div>
        <div id="loading-container">
        <h2>Loading...{this.props.city}</h2>
        </div>
      </div>
    );
  }
}

Loading.propTypes = {
  city: PropTypes.string
};

export default Loading;
