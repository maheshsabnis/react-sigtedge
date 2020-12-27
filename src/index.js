// The react object model loading
import React from 'react';
import ReactDOM from 'react-dom';
// css object model imports
import './index.css';
// imporing the bootstrap modules
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

import {createStore} from  'redux';
import {Provider} from 'react-redux';

// import reducer

import rootReducer from './reduxappfunctionalcomponents/reducers/redecures';

import MainComponent from './reduxappfunctionalcomponents/MainComponent';
// web utilities used by react-scripts
import reportWebVitals from './reportWebVitals';


// create a store
// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
// enabling the browser extension for redux for state simuldation
let store = createStore(rootReducer,
   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());

// use 'store' property of the Provider to load store for Application State Management
// all components executed inside the Provider will be automatically subscribed to store
ReactDOM.render(
  <Provider store={store}>
   <MainComponent></MainComponent>
   </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
