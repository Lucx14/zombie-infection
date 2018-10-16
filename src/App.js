import React, { Component } from 'react';
import WorldMap from './components/WorldMap'
import LocalMap from './components/LocalGame'

class App extends Component {
  render() {
    return (
      <div>
        <WorldMap />
        <LocalMap />
      </div>
    );
  }
}

export default App;
