import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import PointManager from './containers/PointManager';
import Advanced from './containers/Advanced';
import Austrian from './containers/Austrian';

class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <nav>
          <ul>
            <li><Link to="/points">PointManager</Link></li>
            <li><Link to="/advanced">Advanced Mode</Link></li>
            <li><Link to="/austrian">Austrian Mode</Link></li>
          </ul>
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
