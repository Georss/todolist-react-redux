import uniqid from 'uniqid';

export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: uniqid(),
        text,
    };
};

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id,
    };
};

export const removeTodo = (id) => {
    return {
        type: 'REMOVE_TODO',
        id,
    }
}