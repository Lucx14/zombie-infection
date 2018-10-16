import React, { Component } from 'react';
import City from './City.js';
import WorldMap from './WorldMap';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div>
            <Route exact path="/"  component={WorldMap}/>
            <Route path="/london" render={() =><City city="London"/>}/>
            <Route path="/oxford" render={() =><City city="Oxford"/>}/>
          </div>
        </div>
      </HashRouter>
      
    );
  }
}

export default App;
