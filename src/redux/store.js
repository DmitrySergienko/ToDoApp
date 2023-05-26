import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from '../redux/reducers';  // Adjust this line as per your file structure.

const rootReducer =  combineReducers({userReducer});

export const Store = createStore(rootReducer, applyMiddleware(thunk));