import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
// import redux

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

const commentReducer = (state = 0, action) => {
    if (action.type === 'CHANGE_COMMENT') {
        return action.payload;
    }
    return state;
}

// storeInstance goes here
const storeInstance = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentReducer
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
