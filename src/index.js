// The react object model loading
import React from 'react';
import ReactDOM from 'react-dom';
// css object model imports
import './index.css';
// imporing the bootstrap modules
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

// import develper created Components (class components/  functional components)
import App from './App';
import EventComponent from './components/eventcomponent/eventcomponent';
import ProductComponent from './components/productcomponent/productcomponent'; 
// web utilities used by react-scripts
import reportWebVitals from './reportWebVitals';
// Using React.dom
// Get the Component Instance
// Validate the Component using JSX
// MOUNT the Component in Browser as 'Custom-Element'
const message = "I am the Parent Component";
const v1=100;
// the message will be passed to the SimpleComponent
// using Custom property System of 'props' with the property name as 'msg'
ReactDOM.render(
  <React.StrictMode>
   {/* <SimpleComponent msg={message} val={v1}/> */}
   <ProductComponent></ProductComponent>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
