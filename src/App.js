import React, { Component } from 'react';
import logo from './logo.svg';

import CheckboxWithLabel from './CheckboxWithLabel';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <CheckboxWithLabel labelOn="On" labelOff="Off" />
        {'this is a string to be converted to single quote by prettier'}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
