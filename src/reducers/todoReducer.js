const todoReducer = (state=[], action) => {
    
    switch(action.type){

        case 'ADD_TODO':
            return [...state, action.todo]

        case 'DELETE_TODO':
            return state.filter(todo => todo.key !== action.key)

        default: return state
    }
}

export default todoReducer