import React, {Component} from 'react';
export default class Dan extends Component {
    static defaultProps={
            name : "stranger",
            height : "mysterious"
        }
    render() {
        return (
            <div>
            <p>Hi, I'm {this.props.name}, I'm {this.props.height}</p>
            {console.log(this.props)}
            </div>
        );
    }
}