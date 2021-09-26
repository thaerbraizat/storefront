// Create my Redux store here 
import {combineReducers, createStore} from 'redux';
import counter from './checkActiveCat';

//1-  combine reducers in one reducer 
let reducers = combineReducers({counter});

// 2- createStore 
const store = () => {
    return createStore(reducers)
}

// 3 export 
export default store();