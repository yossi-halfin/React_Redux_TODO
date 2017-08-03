import {connect} from 'react-redux';
import App from './../App';

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch({type: 'f'})
        }
    }
}

const TodosConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default TodosConnect;