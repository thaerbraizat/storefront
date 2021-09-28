// Create my Redux store here 
import {combineReducers, createStore,applyMiddleware} from 'redux';
import counter from './checkActiveCat';
import countt from './cart';
import thunk from './middleware/thunk';
import todos from './products';
//1-  combine reducers in one reducer 
let reducers = combineReducers({
    counter,
    countt,
    todos

});

// 2- createStore 
const store = () => {
    return createStore(reducers,applyMiddleware(thunk))
}

// 3 export 
export default store();