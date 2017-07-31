import Actions from './actions-consts'

const completeTodo = (id) => {
    return {
        type: Actions.COMPLETE_TODO,
        id
    }
}

export default completeTodo;