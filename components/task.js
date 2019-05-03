import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AddTask from './AddTask';

export class Task extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         id : 202923,
    //         descriptor : '',
    //         deadline : ''
    //     }
    // }
    // onEdit=(event)=> {
    //     event.preventDefault();
    //     this.props.updateTask(this.state);
    // }

    // enableEdit (event) {
    //     this.setState({inEdit : true});
    // }
    // enabledEdit (event) {
    //     if (event.keyCode === 13) {
    //         this.setState({inEdit : false});
    //     }
    // }
    style=()=>{
        // if (this.props.task.completed) {
            return {
                background : '#f4f4f4',
                padding : '10px',
                borderBottom : '1px #ccc dotted',
                textDecoration : this.props.task.completed? 'line-through' : 'none'
            // }
        }
    }
    render() {
        const {taskID, description, taskDeadline}=this.props.task;
        // let style = {};
        // let editingStyle = {};
         return (
            <div style ={this.style()}>
                <p>
                    <input type ="checkbox" onChange = {() => this.props.completionist(taskID)}/>
                    {description}
                    {taskDeadline}
                    {/* <button onClick={() => {this.props.updateTask(taskID)}}>Edit</button> */}
                    <button onClick={() => {this.props.delTask(taskID)}} style={btnStyle}>delete</button>
                </p>
            </div>
        );
        // }
        // else {
        //     return (
        //         <div style = {this.editingStyle}>
        //             <input type = "text" onKeyDown={this.enabledEdit.bind(this)} value = {this.task.description} onChange={this.enabledEdit}/>
        //             <input type = "text" value = {this.task.taskDeadline} onChange = {this.enabledEdit}/>
        //         </div>
        //     );
    }

}

Task.propTypes = {
    task : PropTypes.object.isRequired,
    completionist : PropTypes.func.isRequired,
    delTask : PropTypes.func.isRequired,
    // updateTask : PropTypes.func.isRequired,
    addTask : PropTypes.func.isRequired
}

const btnStyle = {
    background : '#ff0000',
    color : '#fff',
    border : 'none'
}

export default Task;