import Actions from './actions-consts'

const removeTodo = (id) => {
    return {
        type: Actions.REMOVE_TODO,
        id
    }
}

export default removeTodo;