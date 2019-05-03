import React, {Component} from 'react';
import TaskSetter from './components/tasksetter';
import Heading from './components/layout/Heading';
import AddTask from './components/AddTask';
import UpdateTask from './components/UpdateTask';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks : []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8081/api/v1/tasks')
    .then(res=>this.setState({ tasks : res.data }))
  }

  completionist=(id)=>{
    this.setState({tasks : this.state.tasks.map(task=>{
      if(task.id===id) {
      task.completed=!task.completed
    }
    return task;
    }) });

  }

  delTask = (id) => {
    axios.delete(`http://localhost:8081/api/v1/tasks/${id}`)
    //.then(res => this.setState({tasks : [...this.state.tasks.filter(task=>task.id!==id)] }));
    .then(res=> {
      let tasksLeft = this.state.tasks.filter(task=>task.taskID!==id);
      this.setState({tasks : tasksLeft});
    })
  }

  addTask = (childStates)=>{
    let body = childStates;
    axios.post('http://localhost:8081/api/v1/tasks', body)
    .then(res => {
      let newTasks = this.state.tasks;
      newTasks.push (res.data);
      this.setState({tasks : newTasks});
    });
  }

  // updateTask = (id)=>{
  //   console.log(id);
  //   axios.put(`http://localhost:8081/api/v1/tasks/${id}`, thisbody)
  //   .then(res => {
  //     let updatedTask = this.state.tasks.filter(task=>task.taskID===id);
  //     updatedTask[0] = res.data;
  //     console.log(res.data);
  //     console.log(updatedTask[0]);
  //     //this.setState({tasks : res.data});
  //   })
  // }

  render() {
    return (
      <Router>
      <div className="App">
        <div className = "container">
          <Heading/>
          <Route path="/" render={props=>(
            <React.Fragment>
              <AddTask addTask = {this.addTask}/>
              <TaskSetter tasks={this.state.tasks} completionist = {this.completionist} delTask = {this.delTask} /*updateTask = {this.updateTask}*//>
            </React.Fragment>
          )}
          />
         </div>
      </div>
      </Router>
    );
  }
}

export default App;
