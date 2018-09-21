import React, { Component } from 'react';
import './App.css';

import {Route} from 'react-router-dom'
import Login from './components/Login';
import LandingPage from './components/LandingPage'
import PickSeats from './components/PickSeats'
import Checkout from './components/Checkout'
import Home from './components/Home'
import Switch from 'react-router-dom/Switch';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
      <Route path="/landing" component={LandingPage}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/pickseats/:showing_id" component={PickSeats}></Route>
      <Route path="/checkout" component={Checkout}></Route>
      <Route path="/" component={Home}></Route>
      </Switch>
       
      </div>
    );
  }
}

export default App;
