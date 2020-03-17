import uniqid from 'uniqid';

const todoData = [
    {
        id: uniqid(),
        text: 'Learn JavaScript',
        completed: false
    },
    {
        id: uniqid(),
        text: 'Learn React',
        completed: false
    },
    {
        id: uniqid(),
        text: 'Learn Redux',
        completed: false
    }
];

const getIndexById = (list, id) => list.map(item => item.id).indexOf(id);

const todo = (state = todoData, action)  => {
    switch (action.type) {

        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        
        default:
            return state
    }
}

const todos = (state = todoData, action) => {
    switch (action.type) {
        
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];
        
        case 'TOGGLE_TODO':
            return state.map(item => {
                if (item.id === action.id) {
                    return {...item, completed: !item.completed};
                }
                return item;
            });
        
        case 'REMOVE_TODO':
            const removeIndex = getIndexById(state, action.id);
            return [...state.slice(0, removeIndex), ...state.slice(removeIndex + 1)];
        
        default: 
            return state
        }
}

export default todos;
