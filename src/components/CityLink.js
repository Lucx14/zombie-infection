import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class CityLink extends PureComponent { 
  determineClass() {
    if (this.props.active) {
      return "clickable"
    }
    return "unclickable"
  }

  render() {
    return (
      <div>
        <div className={this.determineClass()} key={this.props.index}>
          {this.props.city}
        </div>
      </div>
    )
  }
}

CityLink.propTypes = {
  city: PropTypes.string,
  index: PropTypes.number
};

export default CityLink;
