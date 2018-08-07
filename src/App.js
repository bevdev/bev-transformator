import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";

import './App.css';
import PointManager from './containers/PointManager';
import Advanced from './containers/Advanced';
import Austrian from './containers/Austrian';
import BevLogo from './asset/images/BEV-LOGO.JPG';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={BevLogo} className="App-logo" alt="logo" />
          <h1 className="App-title">BEV Transformator</h1>
        </header>

        <br />

        <nav>
          <button><Link to="/points">PointManager</Link></button>
          <button><Link to="/advanced">Advanced Mode</Link></button>
          <button><Link to="/austrian">Austrian Mode</Link></button>
        </nav>
        
        <div>
          <Route path="/points" component={PointManager} />
          <Route path="/advanced" component={Advanced} />
          <Route path="/austrian" component={Austrian} />
        </div>

        < br/>
        
      </div>
    );
  }
}

export default App;
