import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import countReducer from './stores/reducers/countReducer';
//=============================================================================

//store imports your reducers, uses middleware thunk for async calls,
//window.redux devtools are so you can use redux in your developer tools

//NOTE: redux devtools should always be removed in production and only
//exist in testing and development

const store = createStore(
  countReducer,
  compose(
    applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

//Provider literally provides your application with the store
//the store holds your reducer, which holds your state and actions (functions)
//to see what is being passed, look at your reducers
//in my case, stores/reducers/countReducer.js

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
//our Provider is the parent Component to our entire application
//this means all children, from App to BaseLayout to anything else we create
//will have full access to our store (reducers, states, actions)



serviceWorker.unregister();
