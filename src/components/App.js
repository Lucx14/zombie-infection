import React, { Component } from 'react';
import WorldMap from './WorldMap';
import LocalGame from './LocalGame';

class App extends Component {
  componentWillMount() {
    this.setState({ city: false });
  }

  setSelected = (city) => {
    this.setState({ city: city });
  };

  renderButtons() {
    const cities = ["london","oxford","paris","rome","oslo",
                    "reykjavik","new york","madrid","marrakech",
                    "cairo","nairobi","istanbul" ,"dubai","cape town",
                    "los angeles","mexico city","bogota","rio de janeiro",
                    "tehran","new dehli","bangkok","shanghai","tokyo",
                    "hong kong","melbourne","wellington"]
    return(cities.map((city) => {
      return(
        <button key={city} onClick={() => { this.setSelected((city)) }}>
        {city}
        </button>
      )
    }))
  }

  endGame = () => {
    this.setState({city: false})
    console.log('in here')
  }

  render() {
    if (this.state.city) {
      return (
        <div>
          <LocalGame city={this.state.city} endGame={this.endGame.bind(this)}/>
        </div>
      );
    }
    return (
      <div>
        {this.state.city}
        <WorldMap/>
        {this.renderButtons()}
      </div>
    )
  }
}

export default App;
