import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//Bring in Redux Logger
import logger from 'redux-logger';
import { HashRouter as Router } from 'react-router-dom';
// Bring in Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';



//Reducer for setting state for the list of pizza
const fbList = (state = [], action) => {
    // TODO - set pizza list with data from server
    if (action.type === 'SET_LIST') {
        return action.payload;
    }
    return state;
}

//Reducer for storing feeling for the pending feedback
const feeling = (state = [], action) => {
    if (action.type === 'SET_FEELING') {
        return action.payload;
    }
    return state;
}

//Reducer for storing understanding for the pending feedback
const understanding = (state = [], action) => {
    if (action.type === 'SET_UNDERSTAND') {
        return action.payload;
    }
    return state;
}

//Reducer for storing support for the pending feedback
const support = (state = [], action) => {
    if (action.type === 'SET_SUPPORT') {
        return action.payload;
    }
    return state;
}

//Reducer for storing comments for the pending feedback
const comments = (state = [], action) => {
    if (action.type === 'SET_COMMENT') {
        return action.payload;
    }
    return state;
}



// The store is the big JavaScript Object that holds all of the information for our application
const storeInstance = createStore(
    combineReducers({ fbList, feeling, understanding, support, comments }), //Add reducer functions to combineReducers
    applyMiddleware(logger) //Add our middleware logger
);


ReactDOM.render(<Provider store={storeInstance}><Router><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
