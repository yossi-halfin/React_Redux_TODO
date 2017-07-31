/**
 * Created by yossih on 30/07/2017.
 */
import React, {Component} from 'react';
import './ItemComponent.css';
import store from './../store';
import completeTodo from './../store/actions/complete.actions';

class ItemComponent extends Component {
    constructor(props) {
        super(props);
        this.state = props.todo;
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <li className="List-Item">
                <label>
                    <input id={this.props.id} checked={this.state.completed} onChange={this.handleChange}
                           type="checkbox"/>
                    <label htmlFor={this.props.id}
                           className={this.state.completed ? 'completed' : null}>{this.state.text}</label>
                </label>
            </li>
        );
    }

    handleChange(event) {
        store.dispatch(completeTodo(this.state.id));

    }

}


export default ItemComponent;

