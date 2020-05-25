import sendMessageReducer from './send';
import loggedReducer from './isLogged';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    sender: sendMessageReducer,
    isLogged: loggedReducer
})

export default allReducers;