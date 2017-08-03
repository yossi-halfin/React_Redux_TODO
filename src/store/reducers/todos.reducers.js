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
    let index;
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
            debugger;
            index = state.findIndex((todo)=>{
                return todo.id ===  parseInt(action.id)?true:false;
            });
            state[index].completed = !state[index].completed;
            return [
                ...state
            ];
        case Actions.REMOVE_TODO:
            debugger;

            index = state.findIndex((todo)=>{
                return todo.id === parseInt(action.id)?true:false;
            });
            state.splice(index,1);
            return [
                ...state
            ];
        default:
            return state
    }
}

export default todos