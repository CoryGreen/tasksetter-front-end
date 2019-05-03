import React, {Component} from 'react';
import PropTypes from 'prop-types'

export class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userID: 202923,
            description : '',
            taskDeadline : ''
        }
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.addTask(this.state);
        this.setState({ description : '', taskDeadline : '', userID : 202923});
    }

    onChange = (event) => {
        this.setState({ description : event.target.value })
    };

    render() {
        return (
            <form onSubmit = {this.onSubmit}
                style = {{display : 'flex'}}>
                <input type = "text" name = "description"
                    style = {{flex : '10', padding : '5px'}}
                    placeholder = "add task..."
                    value={this.state.description}
                    onChange={this.onChange}
                />
                <input type = "datetime" onChange={this.onChange}
                placeholder = "deadline"/>
                <input type = "submit" value = "submit"
                    className = "btn"
                style = {{flex : 1}}/>
            </form>
        );
    }
}

AddTask.propTypes = {
    addTask : PropTypes.func.isRequired
}

export default AddTask;