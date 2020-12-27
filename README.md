# Install react CLI using following command

npm install -g create-react-app

-- The package.json file as a configuration file for the Project

Runtime dependencies

react, the react object model

react-dom , the react DOM rendering Object Model

-- Installition of any third party lib
npm install --save <PACKAGE-NAME>

npm install --save bootstrap

ES 6 Modules, exports the objects so that the Containing libraries can import them

-- The Build COnfiguration

react-script build command

-- Contains all static HTML / CSS Transpilation into JS
-- so that it will be easily loaded in Browser and reduce the
-- loading time
  41.21 KB (-4 B)  build/static/js/2.e010b95e.chunk.js
  22.49 KB         build/static/css/2.1a02f21c.chunk.css
  1.4 KB (+1 B)    build/static/js/3.6fb68425.chunk.js
--- The Runtime Object Model provided by WebPack to React Application
-- so that React App will be executed in browser
  1.17 KB (+2 B)   build/static/js/runtime-main.d0d73908.js

--- The Developer JavaScript and CSS code that is used in the project
--- Internally it uses 'webpack' module bundler tool
--- uses the Babel transpiler to transpile (COmpile the ES 6 code into ES 3)  
--- WebPack uses CSS loader and Style Loader to compress CSS files used by developer

598 B (+221 B)   build/static/js/main.ccc51897.chunk.js
  531 B (+253 B)   build/static/css/main.8c8b27cf.chunk.css
=====================================================================================================

React.js Components

They are Basic Building Units of React Apps to generate reusable and composable Views

1. UI

- Static HTML elements
  - Compiled using React.DOM object Model
    - Validate HTML Tag (or element) using JSX compiler
      - JSX, the XML Rule based Compiler for React application to valdiate the HTML
      - JSX have define an HTML Element System with Attributes so that they are dynamically excecuted

2. State or Data

- Conains the Data Definition properties that will be used by HTML UI for Showing data to end-user
    or accepting data from end-user
- The HTML element is bind with the state proeprties using JSX Attributes to show / accept data
  - e.g. value, className, text, selected, etc.  

3.Events

- An Eventing System that will be used to define behavior of HTML elements
- Used to  Modify state of component

React Components Types

1. Class Components

- ES 6 class that is derived from 'Component' base class
- Uses the 'Lifeycycle' methods to define behavior of Components
- Used extensively till React 15.x before release of React 16

2.Functional Componets

- ES 6 functions returning HTML for HTML rendering  
- Introduced in React 16.0 +
- Currently used as a Standard of React App development
- Uses React 'hooks' from 16.8 + for State and the Lifecycle management
- Maintainability
=======================================================================================================
React
1. Components<P,S> class
  - used as base class for Class components
  - P, the 'props' object, used to pass data(aka state) across components
    - data, the property values or function references  
      - Function References means F1() == F2()
    - the 'props' is an immutable object
      - We can keep define properties in it and it will be 'live' at application scope across 
        all parentt-to-child components  
  - S, the 'state' object, the state local to the component and mutable, i.e. the state will be
    destroyed one the component is unloded (un-mounted)
  - State properties Binding with HTML element using the JSX attribute System
     e.g. <input type="text" value={this.state.<PROPERTY-NAME>}>
      - value is JSX attribute , PROPERTY-NAME is state of the component
=================================================================================================
Class Components
- Controlled Components
  - State + Event Driven Componets
    - The State={} object is used to define the data for the component.
    - This data will be used to decie the rendering
    - Events, used to define behavior of the component
    - Predictable mechanism of deciding the Component's data and its behavior
    - USed this in Line-of-Business (LOB) front-end apps
  - React Forms is the implementation  of Controlled Component
    -Avoid the unnecessary code on front-end
    - Validation logic
- UnControlled Components
  - Familier approach of typical HTML + JavaScript programming
    -e.g. <input type="text" id="txt">
      - document.getElementById('txt').value="";
    - UnControlled COmponent
      - <input type="text" ref="EMPNO">
        - EMPNO is reference of input element
          - this.refs.EMPNO="ABC"; // writing data
          -  var val = this.refs.EMPNO;        
- Lifecycle Hooks
  - Methods used to define the execution strategy of COmponent Post rendering
- React 16.0+ Advance Features
  - Error Management
  - Pattern of React Component Implementation with Higher-Order-Component  (HoC)
  - Navigation Support for SPA

=====================================================================================================
Make sure that, possibly write a single method for UI elements to listen their changes and update 
state. E.g. The 'onChange' event is common for input and select elements, so bind a single method 
to detect changes and update state properties. TO implement this 'the "name" attribute' of input and
select element must match with "state property" bind to that element.  

=====================================================================================================
The reason for setState() is to make sure that the STATE of the component is updated and the react
Component's lifecycle will execute 'render()' again
=====================================================================================================
Some important rules of the React Component UI Compositions
1. Possibly avoid Hard-coding for UI that is generated dynamically
2. If same UI is repated across various components the create  reusable components  
  - If creating reusable components, then make sure that you use correct props types for data
    display and rendering
  - makes sure that, the component communicate with its parent with apropriate methods and values   


=====================================================================================================

Create a TableComponent with following specifications
1. It Should Generate Row and Columns based on DataSoure property passed to it from parent component
2. The component should accept two properties as 'CanDelete', 'CanSort'
  - If CanDelete is true, then each row should show delete button. When this button is clicked
    the record should be deleted from parent component's array
  - If CanSort is true, then the parent component should passs 'SortKey' property to TableComponent
    this SortKey is the property name based on which the table component show the sorted data    
=====================================================================================================
Working with Forms
  - HTML 5 Forms
  - JSX parsing for implementing the Form Model for validations
  
Using LifeCycle

-- Error Handling in Components using Component's lifecycle

Ajax calls
- Using the axios Library
  - The "Promise" based library used for Async HTTP calls
- Use the TableComponent to show Products information in the
ProductsComponent and perform CRUD operations.
- The Delete Button of the TableComponent should Delete Product
 from the ProductsComponent, by making the delete call to service
 from the Product COmponent 

========================================================================================================================================
React Hooks
Functional Components
- JavaScript Functions those returns HTML and have capability of State Management, LifeCycle hook, implemented using standard React Functions.
- Removes or elimnates the confision of Class components for OOPs implemenation
- React 16.0+ functional components precisely 16.8 release
    - 16.8 , React Hooks
- syntax
  - function MyComponent(props){... some logic ..... return {<HTML/>}}; export default MyComponent;
  - ReactDOM.render('<MyComponent/>');

- Syntax, ES 6 Function Expressions using Arrow Operators
  - const MyComponent=(props)=>{  constant function expressions with logic return {<HTML/>}}; export default MyComponeny;  
  - ReactDOM.render('<MyComponent/>'); 

 - Some Questions w.r.t. Functional Components aka React Hooks
 Q1. How to maintain state in functional component?
  - Use 'useState()' react hooks for maintaining and updating state
 Q2. How to Share data across components?
  - Use 'props' like class components
  - Use 'useContext' to share data across components.
  - The 'createContext()' from 'react' provides mechansim of defining object independent to components
    to maintain state of data across components
      - The createContext() object has the 'provider' property having 'value' object in it.
      - This 'value' object pass data across components 
 Q3. How to share events across components?
  - using 'props'
  - the Context-Object's mechanism of passing function renferences.
 Q4. How to manage ComponenDidMount() and ComponentWillUnMount() aka managing lifecycle?
  - The 'useEffect()' hook. This is combination of  ComponenDidMount() and ComponentWillUnMount()
  - useEffect() will be executed for every state change and will keep continue. This 
  will be a issue in the React lifecycle if the useEffect() is making an AJAX call (componenrDidMount).
  To complete an execution of useEffect() pass the dependency array [] parameter to it
  so that once the state is modified the depednency parameter will be notified by the rendering and
  the useEffect () will complete its execution.
 Q5. How to define front-end UI logic inside the functional component? 
  - create constant function expression, const mylogic=()=>{....... logic.....};
  - create child functions, function mylogic(){.......}; 

More Hooks
  - useReducer(), useMemo(), useRef(), etc. https://reactjs.org/docs/hooks-reference.html#useref


IMPORTANT: React Hooks cannot be used inside child funciton of funcitonal component. They are alweays used at component level. 




========================================================================================================================================
Advanced Programming with React.js and State Manegement
Instaling Redux and Saga Dependencies
npm install --save redux react-redux saga redux-saga

- redux: The library for providing object model for Application State Management.
- react-redux: The library that connects the redux with react so that the Application State Management is available for React Applications.
- saga: The Middleware used by redux for performing any asynchronous operations e.g. RESTA API calls
- redux-saga: the Connetc between saga and redux so that the saga middleware is registered in redux
app and hence will be used by React applications.

# Step 1: Create Actions
This is a method that will listen to an event that is dispatched from UI
The Action accepts the Payload a.k.a. the data send from the View, it returns an output action as well as the response payload. Alternatively, the method may contains any other logic as per the need


const addPtroduct=(product)=>{
    // some other logic e.g. promises, etc.
    return {
        type: "ADD_PRODUCT", // the action that is dispatched and same will be returned
        product // the payload
    }
}

export default addPtroduct;

# Step 2: Create a reducer
This is JavaScript pure function. This accepts and action and state as input parameter and returns the state as output parameter. The state in the store will be updated based on the ACTION that is dispatched from view and the output action that is received.

// import the action


import addProduct from './../actions/action';

import {combineReducers} from 'redux';


// write the reducer functions. These are the pure functions.
// the first parameter is the state that will be updated in store
// this state is the older state that is used by reducer function to update based on action
// the second parameter is the action based on which the reducer will be executed  


export const addProductReducer=(state,action)=>{
    switch(action.type){
        case 'ADD_PRODUCT': {
            return {
                product:action.product // the returned product from action will be added in store
            }
        }
        default:
            return state; // return default state from the store
    }
};

// initially there is not data in state but it will be updated
// as the new products are added based on the ADD_PRODUCT Action
// even if not action is dispatched still the component
// must be shown with some daya from store
// thats why this new reducer function created


export const listProductReducer=(state=[],action)=>{
    switch(action.type){
        case 'ADD_PRODUCT': {
            // this reducer makes call to the addProductReducer and read the new product
            // updated in the store
            return [...state, addProductReducer(undefined, action)];  
            
        }
        default:
            return state; // return default state from the store
    }
} 

// the Most Important step combine all reducers and provide them to the redux

const rootReducer = combineReducers({listProductReducer});
export default rootReducer;


# Step 3: Configure the store at the root level of the application and then configure reducer to manage the execution of the store will state update in it

The 'createStore' function from 'redux', that accepts first parameter as reducer, secod parameter as middleware (for ajax calls), and the third parameter as the DEV_TOOLS (not in production)

The 'Provider', this is the bridge between React and Redux. This is available in 'react-redux' package 

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


# The Add Product Component

import React, { useState, useEffect } from 'react';



const AddProductComponent=(props)=>{
    const [product,updateProduct]=useState({ProductId:0,ProductName:''});


    const save=()=>{
         // logic for adding data by dispatching action  
         // the AddClick is ptops type from the parent i.e. MainComponent
         // it is passed with 'product' state object 
         props.AddClick(product);
    }

    const clear=()=>{
        updateProduct({ProductId:0,ProductName:''});
    }

    return(
      <div className="container">
         <div className="form-group">
              <label>Product Id</label>  
              <input type="text" className="form-control"
               value={product.ProductId}
               onChange={(evt)=> updateProduct({...product, ProductId: parseInt(evt.target.value)})}/>
         </div>
         <div className="form-group">
              <label>Product Name</label>  
              <input type="text" className="form-control"
              value={product.ProductName}
              onChange={(evt)=> updateProduct({...product, ProductName: evt.target.value})}/>
         </div>
         <div className="form-group">
             <input type="button" value="Clear" onClick={clear} className="btn btn-warning"/>
             <input type="button" value="Save" onClick={save} className="btn btn-success"/>
         </div>
      </div>
  );
};

export default AddProductComponent;



# The List Product Component

import React from 'react';

const ListProductsComponent=(props)=>{

    if(props.listProducts === undefined || props.listProducts.length === 0) {
       return (
        <div className="container">
        <strong> No Data Received from Store</strong>
      </div> 

       )
    } else {

    return (
        <div className="container">
           <div>
             <strong>Data received from Stiore</strong>
           </div>
           <table className="table table-bordered table-dark table-striped">
             <thead>
                <tr>
                    <td>
                        ProductId
                    </td>
                    <td>
                       Product Name
                    </td>
                </tr>
             </thead>
             <tbody>
               {
                    props.listProducts.map((prd,idx)=>(
                        <tr key={idx}>
                           <td>
                              {prd.product.ProductId}
                           </td>
                           <td>
                              {prd.product.ProductName }
                           </td>
                        </tr>
                    ))
               }
             </tbody>
           </table>
        </div>
    );
            }
};

export default ListProductsComponent;

# The Main Component

import React from 'react';

import AddProductComponent from './components/addproductcomponent';
import ListProductsComponent from './components/listproductcomponent';


// import the redux hooks to dispatch actions and subscribe to the store using reducers
// to read data
// useDispatch hooks for dispatching action from UI
// useSelector hooks for subscribing to store to read data

import {useSelector, useDispatch} from 'react-redux';

// import then action being dispatch
import addProduct from './actions/action';


const MainComponent=()=>{

    // read all products from the store
    let products = useSelector(state=>state.listProductReducer);

    // the dispatch object to dispatch action
    let dispatch = useDispatch();
    return(
        <div className="container">
           <h2>Redux App using Fucntional Components</h2>
           {/*  create a props type that will be passed to AddProductComponent 
        to dispatch the action */}
           <AddProductComponent AddClick={(product)=> dispatch(addProduct(product))}/>
           <hr/>
           {/* create a  props type that will pass the data to show list of products
            these product will be received from the 'store' using  useSelector() hooks
        */}
           <ListProductsComponent listProducts={products}/>
        </div>
    );
};

export default MainComponent;












