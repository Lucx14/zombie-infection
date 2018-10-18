import React, { Component } from 'react';
// import City from './City.js';
import WorldMap from './WorldMap';
import LocalGame from './LocalGame';
import {
  Route,
  HashRouter
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div>
            <Route exact path="/"  component={WorldMap}/>
            <Route path="/london" render={() =><LocalGame/>}/>
            <Route path="/oxford" render={() =><LocalGame/>}/>
          </div>
        </div>
      </HashRouter>

    );
  }
}

export default App;
