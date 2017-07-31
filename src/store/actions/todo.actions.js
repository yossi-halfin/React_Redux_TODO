import Actions from './actions-consts'

let nextTodoId = 0;

const addTodo = text => {
    return {
        type: Actions.ADD_TODO,
        id: nextTodoId++,
        text
    }
}

export default addTodo;