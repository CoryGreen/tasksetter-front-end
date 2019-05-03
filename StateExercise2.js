import react, {Component} from 'react';
export default class StateExercise2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names : ["Ian", "Bob", "Matt"]
        }
    }
    render() {
        return (<div>
            this.state.names.map((name, i)=>
            <p key = {"task" + i}>Hi {name}
                </p>))
            </div>
        );
    }
}