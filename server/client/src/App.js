import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/LandingPage'
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login></Login>
       <LandingPage></LandingPage> 
      </div>
    );
  }
}

export default App;
