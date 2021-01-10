import React from 'react';

// import the action
import { getProducts } from "./../actions/actions";

// use connect() method to connect the redux store with react application
import { connect } from "react-redux";


const GetProductsRequestComponent=(props)=>{
    return(
        <div className="container">
            <input type="button" value="Get Products" 
             onClick={props.get}
            className="btn btn-warning"/>
        </div>
    );
};


// map the action to be disptched to props so that component can use it on click event
// same as useDispatch()
const mapDispatchToProps={
    // props:actionname to be dispatched
    get:getProducts
}

// connect the component with store along with dispatched actions
// connetc(mapStateToProps, mapDispatchToProps)
// mapStateToProps, means map the state from store to 'props' of the coponent so that
// data from store can be provided to component and can be loaded in component
// mapDispatchToProps, dispatch an action from the component that will be listedn by 
// reducer and the state in store will be updated

export default connect(null, mapDispatchToProps)(GetProductsRequestComponent);

// export default GetProductsRequestComponent;