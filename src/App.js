import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MaterialButton from './components/MaterialButton'
import ApixuApiTest from './components/ApixuApiTest'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MaterialButton />
        <ApixuApiTest />
      </div>
    );
  }
}

export default App;
