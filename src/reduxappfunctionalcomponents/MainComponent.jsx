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
