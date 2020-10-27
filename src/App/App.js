import React, { Component } from 'react';
import Group from './components/Group';
import Student from './components/Student';
import './App.scss';
import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Group />
        <Student />
      </div>
    );
  }
}

export default App;
