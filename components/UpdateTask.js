// import React, {Component} from 'react';
// import PropTypes from 'prop-types'

// export class UpdateTask extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             userID: 202923,
//             description : '',
//             taskDeadline : ''
//         }
//     }

//     onSubmit = (event) => {
//         event.preventDefault();
//         // this.props.addTask(this.state.description);
//         // this.props.addTask(this.state.taskDeadline);
//         this.props.updateTask(this.state);
//         this.setState({ description : '', taskDeadline : '', userID : 202923});
//     }

//     onDescChange = (event) => {
//         this.setState({ description : event.target.value })
//     };

//     onTimeChange = (event) => {
//         // this.state.taskDeadline = event.target.value;
//         this.setState({ taskDeadline : event.target.value})
//     };

//     render() {
//         return (
//             <form onSubmit = {this.onSubmit}
//                 style = {{display : 'flex'}}>
//                 <input type = "text" name = "description"
//                     style = {{flex : '10', padding : '5px'}}
//                     placeholder = {this.state.description}
//                     value={this.state.description}
//                     onChange={this.onDescChange}
//                 />
//                 <input type = "datetime"
//                 placeholder = {this.state.taskDeadline}
//                 onChange={this.onTimeChange}/>
//                 <input type = "submit" value = "submit"
//                     className = "btn"
//                 style = {{flex : 1}}/>
//             </form>
//         );
//     }
// }

// UpdateTask.propTypes = {
//     updateTask : PropTypes.func.isRequired 
// }
// export default UpdateTask
