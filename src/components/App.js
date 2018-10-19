import React, { Component } from 'react';
import WorldMap from './WorldMap';
import {
  Route,
  HashRouter
} from "react-router-dom";
import LocalGame from './LocalGame';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div>
            <Route exact path="/"  component={WorldMap}/>
            <Route path="/london" render={() =><LocalGame/>}/>
            <Route path="/oxford" render={() =><LocalGame/>}/>
            <Route path="/paris" render={() =><LocalGame/>}/>
            <Route path="/rome" render={() =><LocalGame/>}/>
            <Route path="/oslo" render={() =><LocalGame/>}/>
            <Route path="/reykjavik" render={() =><LocalGame/>}/>
            <Route path="/new york" render={() =><LocalGame/>}/>
            <Route path="/madrid" render={() =><LocalGame/>}/>
            <Route path="/marrakech" render={() =><LocalGame/>}/>
            <Route path="/cairo" render={() =><LocalGame/>}/>
            <Route path="/nairobi" render={() =><LocalGame/>}/>
            <Route path="/istanbul" render={() =><LocalGame/>}/>
            <Route path="/dubai" render={() =><LocalGame/>}/>
            <Route path="/cape town" render={() =><LocalGame/>}/>
            <Route path="/los angeles" render={() =><LocalGame/>}/>
            <Route path="/mexico city" render={() =><LocalGame/>}/>
            <Route path="/bogota" render={() =><LocalGame/>}/>
            <Route path="/rio de janeiro" render={() =><LocalGame/>}/>
            <Route path="/tehran" render={() =><LocalGame/>}/>
            <Route path="/new dehli" render={() =><LocalGame/>}/>
            <Route path="/bangkok" render={() =><LocalGame/>}/>
            <Route path="/shanghai" render={() =><LocalGame/>}/>
            <Route path="/tokyo" render={() =><LocalGame/>}/>
            <Route path="/hong kong" render={() =><LocalGame/>}/>
            <Route path="/melbourne" render={() =><LocalGame/>}/>
            <Route path="/wellington" render={() =><LocalGame/>}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
