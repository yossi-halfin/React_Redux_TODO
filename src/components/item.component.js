/**
 * Created by yossih on 30/07/2017.
 */
import React, {Component} from 'react';
import './ItemComponent.css';
import completeTodo from './../store/actions/complete.actions';
import removeTodo from './../store/actions/remove.actions';
import {connect} from 'react-redux';

class ItemComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('this.props', this.props);
        return (
            <li className="List-Item">
                <label className="checkbox_title">

                    <input id={this.props.id} checked={this.props.todo.completed} onChange={this.props.complete}
                           type="checkbox"/>
                    <label htmlFor={this.props.id}
                           className={this.props.todo.completed ? 'completed' : null}>{this.props.todo.text}</label>
                </label>
                <i onClick={this.props.remove} className="fa fa-trash-o" aria-hidden="true"></i>

            </li>
        );
    }


}
const mapStateToProps = (state, ownProps) => {
    return {ownProps}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        complete: () => dispatch(completeTodo(ownProps.id)),
        remove: () => dispatch(removeTodo(ownProps.id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemComponent);

