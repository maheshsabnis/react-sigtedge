import React from 'react';
import { connect } from "react-redux";
const ListProductsComponent=({products})=>
    products? (
        <div className="container">
            <strong>List of Products</strong>
            {JSON.stringify(products)}
        </div>
    ):null;


// mapStateToProps: will be passed to the connect()
// this will be used to read the state from the store
// and pass to the component

const mapStateToProps=state=>({
    // props: the data from state
    products:state.products
});


export default connect(mapStateToProps,null)(ListProductsComponent)


//export default ListProductsComponent;
