import React, { Component } from 'react';
import Group from './components/Group';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Group />
      </div>
    );
  }
}

export default App;
