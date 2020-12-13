

export const setAdvanced = () => {
    return {
        type: 'SET_ADVANCED'
    }
}

export const addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        todo
    }
}

export const deleteTodo = (key) => {
    return {
        type: 'DELETE_TODO',
        key
    }
}