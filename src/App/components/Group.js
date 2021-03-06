import React, { Component } from 'react';
import '../styles/Group.css';

const URL = 'http://localhost:8080/student/divide';

class Group extends Component {
  // TODO GTB-工程实践: - 因为没有提取共用方法导致重复代码
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
    };
  }

  componentDidMount() {
    fetch(URL)
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          data: result.group,
        });
      });
  }

  handler() {
    fetch(URL)
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          data: result.group,
        });
      });
  }

  render() {
    return (
      <div className="group">
        <div className="title">分组列表</div>
        <div className="operate">
          <button type="submit" className="button primary" onClick={() => this.handler()}>
            分组学员
          </button>
        </div>
        <div className="list">
          {/* TODO GTB-知识点: - 列表数据建议使用数组结构更好操作 */}
          {Object.keys(this.state.data).map((key) => (
            <div key={key}>
              <div className="divideGroup">
                <div className="groupTitle">{key}组</div>
                <div className="groupContent">
                  {Object.keys(this.state.data[key]).map((id) => (
                    <div key={id}>
                      <div className="member">
                        {this.state.data[key][id].id}.{this.state.data[key][id].name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Group;
