import Actions from '../actions/actions-consts'

let init_state = [
    {
        id:100,
        text: 'Pack my things',
        completed: false
    },
    {
        id:110,
        text: 'Take some photos',
        completed: false
    }
];

const todos = (state = init_state, action) => {
    switch (action.type) {
        case Actions.ADD_TODO:
            return [
                ...state,
                {
                    id:action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case Actions.COMPLETE_TODO:
            let index = state.findIndex((todo)=>{
                return todo.id === action.id?true:false;
            });
            state[index].completed = !state[index].completed;
            return [
                ...state
            ];
        default:
            return state
    }
}

export default todos