import React, { Component } from 'react';
import './assets/less/App.css';
import Home from './components/Home'


class App extends Component {
  render() {
    return (
      <div className="App">
          <Home></Home>
      </div>
    );
  }
}

export default App;
