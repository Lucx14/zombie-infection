import React, { Component } from 'react';
import WorldMap from './components/WorldMap'
import LocalGame from './components/LocalGame'

class App extends Component {
  render() {
    return (
      <div>
        <WorldMap />
        <LocalGame />
      </div>
    );
  }
}

export default App;
