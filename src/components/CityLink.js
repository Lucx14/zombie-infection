import React, { PureComponent } from 'react';
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
            <div className={this.determineClass()} key={this.props.index}>
              {this.props.city}
            </div>
    )
  }
}


CityLink.propTypes = {
  city: PropTypes.string,
  index: PropTypes.number
};

export default CityLink;
