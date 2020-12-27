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