import React, { Component } from 'react';
import Group from './components/Group';
import Student from './components/Student';
import './App.scss';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        {/* TODO GTB-知识点： + 第一层组件划分合理 */}
        <Group />
        <Student />
      </div>
    );
  }
}

export default App;
// TODO GTB-工程实践: + 有小步提交，提交信息符合语义
