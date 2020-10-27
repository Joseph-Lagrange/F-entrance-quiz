import React, { Component } from 'react';
import '../styles/Student.css';

const URL = 'http://localhost:8080/students';

class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    fetch(URL)
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          data: result.students,
        });
      });
  }

  render() {
    return (
      <div className="student">
        <div className="studentTitle">学员列表</div>
        <div className="studentList">
          {Object.keys(this.state.data).map((key) => (
            <div key={key}>
              <div className="studentMember">
                {this.state.data[key].id}.{this.state.data[key].name}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Student;
