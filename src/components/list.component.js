import React, {Component} from 'react';
import ItemComponent from './item.component'
import './ListComponent.css';

class ListComponent extends Component
{
    render() {
        let todos = this.props.todos.map((todo)=>{
            return <ItemComponent key={todo.id} id={todo.id} todo={todo}/>;
        });
        return (
            <ul className="List">
                {todos}
            </ul>
        );
    }
}


export default ListComponent;
