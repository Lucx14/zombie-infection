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
            <Route path="/london" render={() =><City city="london"/>}/>
            <Route path="/oxford" render={() =><City city="oxford"/>}/>
          </div>
        </div>
      </HashRouter>
      
    );
  }
}

export default App;
