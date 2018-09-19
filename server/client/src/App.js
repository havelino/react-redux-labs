import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ThemeSwitcher from './theme-switcher'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div class="container">
            <div class="row">
              <div class="col-sm">
              <a href="#">Home</a>
              </div>
              <div class="col-sm">
              <a href="#">About</a>
              </div>
              <div class="col-sm">
              <a href="#">Login</a>
              </div>
              <div class="col-sm">
              <a href="#">Checkout</a>
              </div>
            </div>
          </div>
          <h1 className="App-title">Dinner and A Movie</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ThemeSwitcher></ThemeSwitcher>
      </div>
    );
  }
}

export default App;
