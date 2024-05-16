const initialState = {
    notes: [],
};

const noteReducers = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_NOTES':
            return {...state, notes: [action.payload, ...state.notes]};
        case 'DELETE_NOTE': 
            return {...state, notes: state.notes.filter(note => note.id !== action.payload)}    
        case 'EDIT_NOTE': 
            return {
                ...state, 
                notes: state.notes.map((item) => 
                    item.id === action.payload.id ? 
                    {
                        ...item, 
                        title: action.payload.title, 
                        description: action.payload.description
                    } : item)}    
        default:
            return state;
    }
}

export default noteReducers;