import React, {Component} from 'react';
import Task from './task';
import PropTypes from 'prop-types';

class TaskSetter extends Component {
  render() {
    return this.props.tasks.map((task)=> (
      <Task key={task.id} task = {task} completionist = {this.props.completionist} delTask={this.props.delTask} /*updateTask={this.props.updateTask}*//>
    ));
  }
}

TaskSetter.propTypes = {
    tasks : PropTypes.array.isRequired,
    completionist : PropTypes.func.isRequired,
    delTask : PropTypes.func.isRequired,
    updateTask : PropTypes.func.isRequired
}
export default TaskSetter;
