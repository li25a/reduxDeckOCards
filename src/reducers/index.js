import { combineReducers } from 'redux';
import counter from './counter';
import deck from './deck';


const rootReducer = combineReducers({
    counter,
    deck
});

export default rootReducer;
