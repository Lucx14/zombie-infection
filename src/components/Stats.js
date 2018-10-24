import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Stats extends Component {

  render() {
    return (
      <div>
          <h1>Stats</h1>
          <h3>{this.props.speed}</h3>
          <h3>{this.props.resilience}</h3>
          <h3>{this.props.aggression}</h3>
          <button onClick={() => { this.props.done() }}>Done</button>
      </div>
    );
  }
}

// Stats.propTypes = {
//   city: PropTypes.string
// };

export default Stats;
