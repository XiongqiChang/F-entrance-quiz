import React, { Component } from 'react';

export default class StudentList extends Component {
  render() {
    return <div />;
  }
  /* 
    state = {
        id: '',
        name: '',
    }
    
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    async componentWillMount() {
        let students = await (await fetch('http://localhost:8080/students')).json();
        this.setState({ students });
    }
    
    render() {
        let { students = [] } = this.state;
        return (<div>学员列表
            {students.map(({ id, name }) =>
                <div >
                    <p>{id}</p>
                    <p>{name}</p>
                </div>
            )}
        </div>
        );
    } 
    */
}
