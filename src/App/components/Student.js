import React, { Component } from 'react';
import '../styles/Student.css';

const URL = 'http://localhost:8080/students';

class Student extends Component {
  // TODO GTB-工程实践: - 建议将这个共用方法放到apiUtils之类的地方
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
    // TODO GTB-工程实践: - 建议将获取数据的方法放到单独的service
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
      // TODO GTB-知识点: - 这里组件有明显的分区块，建议使用<section> 标签
      <div className="student">
        {/* TODO GTB-知识点: - 既然是title,应该是 h* 标签更语义化 */}
        <div className="studentTitle">学员列表</div>
        <div className="studentList">
          {/* TODO GTB-知识点: - 列表数据建议使用数组结构更好操作 */}
          {Object.keys(this.state.data).map((key) => (
            <div key={key}>
              {/* TODO GTB-知识点: - 这块内容和Group里面有重复，建议抽取共用组件 */}
              <div className="studentMember">
                {this.state.data[key].id}.{this.state.data[key].name}
              </div>
            </div>
          ))}
          {/* TODO GTB-知识点: - css class 命名风格应该统一，不建议用驼峰 */}
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
