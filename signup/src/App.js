import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.css';
import { Register } from './Register';

import { store } from './store/store';

class App extends Component {
  constructor() {
    super();
    this.state = store.getState();
    store.subscribe(this.refresh);
    
  }
  render() {
    return (
      <div>
        <section>
          <p>
            {this.state.savedName} were last here at {this.state.lastVisit} . Welcome back!
          </p>
        </section>
        <Register person= {this.state.person}/>
      </div>
    );
  }
  refresh = ()=>{
    this.setState(store.getState());
  }
}

export default App;
