import React, { Component } from 'react';
import '../styles/Student.css';

const URL = 'http://localhost:8080/students';

class Student extends Component {
  static checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }

  constructor(props) {
    super(props);
    this.state = {
      data: {},
      student: {
        name: '',
      },
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

  handleChange = (event) => {
    this.setState({
      student: {
        [event.target.name]: event.target.value,
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:8080/student', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.student.name),
    })
      .then(Student.checkStatus)
      .then(() => {
        fetch(URL)
          .then((response) => response.json())
          .then((result) => {
            this.setState({
              data: result.students,
            });
          });
      });
  };

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
          <form className="form-box" onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="name"
              className="studentMember"
              onChange={this.handleChange}
              value={this.state.student.name}
              placeholder="      + 添加学员"
              style={{ backgroundColor: '#ffffff', height: '31px' }}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Student;
