import React, {Component} from 'react';
export default class StateExercise extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : props.name
        }
    }
    nameChange=(e)=>{
        this.setState({
            name : e.target.value
        });
    }
    render(){
        return (
            <div>
                <input type="text" onChange={this.nameChange.bind(this)}/>
                <p>{this.state.name}</p>
            </div>
        );
    }
}