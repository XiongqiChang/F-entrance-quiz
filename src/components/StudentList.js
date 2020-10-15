import React, { Component } from 'react';

export default class StudentList extends Component {
  render() {
    return <div />;
  }
  // TODO state只写在一个地方，这里或者constructor里面，且内容不对
  state = {
    id: '',
    name: '',
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentWillMount() {
    const students = await (await fetch('http://localhost:8080/students')).json();
    this.setState({ students });
  }

  render() {
    const { students = [] } = this.state;
    return (
      <div>
        学员列表
        {students.map(({ id, name }) => (
          <div>
            <p>{id}</p>
            <p>{name}</p>
          </div>
        ))}
      </div>
    );
  }
}
