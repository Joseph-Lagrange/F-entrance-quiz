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
        <div className="list">
          <div className="divideGroup">
            <div className="groupTitle">1组</div>
            <div className="groupContent">
              <div className="member">1.成吉思汗</div>
              <div className="member">2.成吉思汗</div>
              <div className="member">3.成吉思汗</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Group;
