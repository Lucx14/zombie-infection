import React, { Component } from 'react';
import "./worldmap.css"
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class City extends Component {
  cityRoute() {
    return `/${this.props.city}`
  }

  render() {
    return (
      <div>
        <h1>{this.props.city}</h1>
      </div>
    );
  }
}

export default City;
