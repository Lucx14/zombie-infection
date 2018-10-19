import React, { Component } from 'react';
import WorldMap from './WorldMap';
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
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
