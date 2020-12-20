import React, {useState} from "react";
import DropDownComponent from './dropdowncomponent';
import TableComponentContextEvent from './tableComponentContextEvent';
import {DataContext} from './datacontext';

const StateComponent=()=>{
    // destructuring 
    // an approach of defing an array that contains
    // propeties, methods of the complex object like JSON object
          // initvalue, callback to update value = useState(initialState with schema)  
    const [product, updateProduct] = useState({ProductId:0, ProductName:'', CategoryName:''});
    const [products, addProduct] = useState([]);
    const categories =['ECT', 'ECL', 'FOD'];


    const clear=()=>{
        // reinitialize the Product State
        updateProduct({
            ProductId:0, ProductName:'', CategoryName:''
        });
    }

    const save=()=>{
        addProduct([...products, {ProductId:product.ProductId, 
            ProductName: product.ProductName, 
            CategoryName:product.CategoryName}]);
    }

    return (
        <div className="container">
            <div className="form-group">
                <label>Product Id</label>
                {/* Syntax of databinding with update state in functional component
                  to update the state in functional component using Hooks
                  use Object Mutation and preform this in the evnt of HTML
                  element that will update the state
                  onChange={(evt)=> updateProduct({...product, ProductId: parseInt(evt.target.value)})}
                  ...product is object mutation, the same object will be updated for evenry change of
                  input element 
                */}
                <input type="text" className="form-control"  
                name="ProductId"
                 value={product.ProductId}
                 onChange={(evt)=> updateProduct({...product, ProductId: parseInt(evt.target.value)})}></input>
            </div>
            <div className="form-group">
                <label>Product Name</label>
                <input type="text" className="form-control"  
                name="ProductName"
                value={product.ProductName}
                onChange={(evt)=> updateProduct({...product, ProductName: evt.target.value})}
                ></input>
            </div>

            <div className="from-group">
               <label>Select Category</label> 
              <DropDownComponent dataSource={categories}
               data={product.CategoryName}
               emitSelectedValue={(data)=> updateProduct({...product, CategoryName:data})}
               ></DropDownComponent>
            </div>

            <div className="form-group">
                <input type="button" value="Clear" onClick={clear} className="btn btn-warning"></input>
                <input type="button" value="Save" onClick={save}  className="btn btn-success"></input>
            </div>
            <div className="container">
                <strong>{JSON.stringify(products)}</strong>
            </div>
            <hr/>
           {/* <div className="form-group">
                <DataContext.Provider value={products}>
                  <TableComponentContext/>
                </DataContext.Provider>
            </div> */}

             {/* Passing multiple object values 
            updateProduct: is the function that will update product object
            when the child component pass data to parent component
            */}   
            <div className="form-group">
            <DataContext.Provider value={{products, updateProduct}}>
              <TableComponentContextEvent/>
            </DataContext.Provider>
        </div>

        </div>
    );
};

export default StateComponent;