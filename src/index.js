import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// import redux
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';


// Reducers go here
const feelingReducer = (state = 0, action) => {
    if (action.type === 'CHANGE_FEELING') {
        return action.payload;
    }
    return state;
}

const understandingReducer = (state = 0, action) => {
    if (action.type === 'CHANGE_UNDERSTANDING') {
        return action.payload;
    }
    return state;
}

const supportReducer = (state = 0, action) => {
    if (action.type === 'CHANGE_SUPPORT') {
        return action.payload;
    }
    return state;
}

const commentsReducer = (state = '', action) => {
    if (action.type === 'CHANGE_COMMENTS') {
        return action.payload;
    }
    return state;
}

// Reducer to toggle edit mode for inputs
const isEditModeOn = (state = false, action) => {
    if (action.type === 'TURN_EDIT_ON') {
        return true;
    }
    else if (action.type === 'TURN_EDIT_OFF') {
        return false;
    }
    return state;
}

// storeInstance goes here
const storeInstance = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentsReducer,
        isEditModeOn
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
