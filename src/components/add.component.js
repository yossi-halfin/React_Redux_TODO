import React, {Component} from 'react';
import './AddComponent.css';
import store from './../store';
import addTodo from '../store/actions/todo.actions';
class AddComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    render() {
        return (
            <div className="Add-Module">
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Add To-Do..." className="input-field" value={this.state.text} type="text" onChange={this.handleKeyPress}/>
                </form>
            </div>
        );
    }

    handleSubmit(event) {
        store.dispatch(addTodo(this.state.text));
        this.setState({text:''});
        event.preventDefault();
    }

    handleKeyPress(e) {
        this.setState({text: e.target.value});

    }
}


export default AddComponent;
