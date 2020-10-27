import React, { Component } from 'react';
import '../styles/Student.css';

class Student extends Component {
  render() {
    return (
      <div className="student">
        <div className="studentTitle">学员列表</div>
        <div className="studentList">
          <div className="studentMember">1.成吉思汗</div>
          <div className="studentMember">2.成吉思汗</div>
          <div className="studentMember">3.成吉思汗</div>
        </div>
      </div>
    );
  }
}

export default Student;
