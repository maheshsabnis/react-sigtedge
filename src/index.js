// The react object model loading
import React from 'react';
import ReactDOM from 'react-dom';
// css object model imports
import './index.css';
// imporing the bootstrap modules
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

// import object molde from redux to create storr, cofigure middleware , browser simulation compose
import { createStore, applyMiddleware,compose } from "redux";
// provider
import { Provider } from "react-redux";

// reducrer

import reducer from './sagaapp/reducers/reducers';

// root saga
import rrootSaga from './sagaapp/sagas/index';

// create-middleware to register the SAGA middleware with store

import createSagaMiddleware from 'redux-saga';



import MainSagaComponent from './sagaapp/MainSagaComponent';
 
// web utilities used by react-scripts
import reportWebVitals from './reportWebVitals';
import rootSaga from './sagaapp/sagas/index';

// create an instance of Saga Middleware

const appSagaMiddleware = createSagaMiddleware();

// create  a Paramater ENhancer taht will
// compose an object for createStore() to create store with middleware
// and the RDUX Tools

const parameterEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose;

// create a store by condiguring reducre and parameter enhancer along with middleware
let store = createStore(reducer, parameterEnhancer(applyMiddleware(appSagaMiddleware)));

// keep te saga middleware runniung so that it can monitor the action displatched
appSagaMiddleware.run(rootSaga);


// subscribe the store to components
  
ReactDOM.render(
  <Provider store={store}>
   <MainSagaComponent></MainSagaComponent>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
