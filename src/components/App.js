import React, { Component } from 'react';
import WorldMap from './WorldMap';
import LocalGame from './LocalGame';
import "./app.css"

class App extends Component {
  componentWillMount() {
    this.setState({ city: false, playing: false });
  }

  setSelected(city) {
    this.setState({ city: city });
  };

  startGame() {
    this.setState({ playing: true });
  }

  renderButtons() {
    const cities = ["london","oxford","paris","rome","oslo",
                    "reykjavik","new york","madrid","marrakech",
                    "cairo","nairobi","istanbul" ,"dubai","cape town",
                    "los angeles","mexico city","bogota","rio de janeiro",
                    "tehran","new dehli","bangkok","shanghai","tokyo",
                    "hong kong","melbourne","wellington"]
    return(cities.map((city, index) => {
      return(
        <button className="city-button" key={index} title={city} onClick={() => { this.setSelected(city) }}></button>
      )
    }))
  }

  render() {
    if (this.playing) {
      return (
        <div>
          <h1 id="main-title" className="center">TRICK OR EAT BRAINS</h1>
          <button onClick={() => { this.startGame() }} id="start-button" className="center">START</button>  
        </div>
      );
    } else if (this.state.city) {
      return (
        <div>
          <LocalGame city={this.state.city} />
        </div>
      );
    } else {
      return (
        <div>
          {this.state.city}
          <WorldMap/>
          {this.renderButtons()}
        </div>
      )
    }
  }
}

export default App;
