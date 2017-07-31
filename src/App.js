import React, {Component} from 'react';
import ListComponent from './components/list.component'
import Counter from './components/count.component'
import AddComponent from './components/add.component'
import './App.css';
import store from './store';
class App extends Component {
    todo_refs = [];

    constructor() {
        super();
        this.state = store.getState();
    }

    render() {
        return (
            <div className="App">
                <label className="App-header">TO-DO List</label>
                <div className="text-right">
                    <Counter todos={this.state.todos}/>
                </div>
                <ListComponent todos={this.state.todos}/>
                <AddComponent/>
            </div>
        );
    }

    subscribe() {
        this.todo_refs.push(store.subscribe(() => {
            this.setState(store.getState());
        }));
    }

    componentDidMount() {
        this.subscribe();
    }

    componentWillUnmount() {
        this.todo_refs.forEach((ref) => {
            ref.unsubscribe();
        });
    }


}

export default App;
