const todoReducer = (state=['abc', 'def', 'ghi'], action) => {
    
    switch(action.type){

        case 'ADD_TODO':
            return [...state, action.todo]

        default: return state
    }
}

export default todoReducer