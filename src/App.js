import React, {Component} from 'react';
import ListComponent from './components/list.component'
import Counter from './components/count.component'
import AddComponent from './components/add.component'
import './App.css';
import store from './store';
import {connect} from 'react-redux'


class App extends Component {
    todo_refs = [];

    constructor() {
        super();
    }

    render() {
        return (
            <div className="App">
                <label className="App-header">TO-DO List</label>
                <div className="text-right">
                    <Counter todos={this.props.todos}/>
                </div>
                <ListComponent todos={this.props.todos}/>
                <AddComponent/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        todos : state.todos
    }
}




export default connect(
    mapStateToProps
)(App);
