import React, { Component } from 'react';
import '../styles/Group.css';

class Group extends Component {
  render() {
    return (
      <div className="group">
        <div className="title">分组列表</div>
        <div className="operate">
          <button type="submit" className="button primary">
            分组学员
          </button>
        </div>
      </div>
    );
  }
}

export default Group;
