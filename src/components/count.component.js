import React, {Component} from 'react';

class Counter extends Component
{
    render() {
        let completeCount = this.props.todos.filter((todo)=>{
            return todo.completed?true:false;
        }).length;
        return (
            <div className="font-arial fs10 space-5-bottom">{completeCount} Completed tasks.</div>
        );
    }
}


export default Counter;
