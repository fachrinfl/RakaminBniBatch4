import {combineReducers} from 'redux';
import noteReducers from './notesReducers';

const rootReducer = combineReducers({
    notes: noteReducers,
});

export default rootReducer;