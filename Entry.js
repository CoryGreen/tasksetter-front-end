import React, {Component} from 'react';
export default class InputBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : this.props.name,
            arr : []
        }
    }
    render() {
        return (
            <div>
            <button onClick = {this.addName}>Add</button> 
            <input type = "text" onChange = {this.nameChange.bind(this)}/>
            {this.state.arr.map((arr, i)=><p key = {"task" + i}>{arr}</p>)}
            </div>
        );
    }
    nameChange=(e)=>{
        this.setState({
            name : e.target.value
        });
    }
    addName=()=> {
        let newArray = this.state.arr;
        newArray.push(this.state.name);
        this.setState({arr:newArray});
    }
}