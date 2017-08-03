import React, {Component} from 'react';
import ItemComponent from './item.component'
import './ListComponent.css';

class ListComponent extends Component {
    render() {
        let todos = this.props.todos.map((todo)=>{
            console.log('2');
            return <ItemComponent key={todo.id} id={todo.id} todo={todo}/>;
        });
        return (
            <ul className="List">
                {todos}
            </ul>
        );
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('ListComponent',nextProps);
    }

}


export default ListComponent;
