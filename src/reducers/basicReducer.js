const basicReducer = (state='BASICC', action) => {
    
    switch(action.type){

        case 'SET_ADVANCED':
            return 'ADVANCED'

        default: return state
    }
}

export default basicReducer