import React,  {Component} from 'react';

import {Logic} from './../../models/logic';
import {Manufacturers, Categories} from './../../models/constants';
// import the SelectComponent

import SelectComponent from './../reusablecomponents/selectcomponent'

class ProductComponent extends Component {
  constructor(props){
      super(props);
      this.state = {
          ProductId:0,
          ProductName:'',
          CategoryName:'',
          Manufacturer:'',
          Description:'',
          BasePrice:0,
          products:[],
          columnHeaders:[],
          categories:Categories, // the value from Categories constnt is put in state property
          manufacturers: Manufacturers // the value from Categories constnt is put in state property
      };
      this.logic = new Logic(); // an instance of Logic class
     
  }


  // use the componentDidMount() a lifecycle method to make sure that
  // the state is loaded from 1. Long Runnind code 2. AJAX Calls  
  // this metod will be called after rendering() and if this method
  // update state, the rendering will be called again 
  componentDidMount=()=>{
    let prds = this.logic.getProducts();
    this.setState({products: prds},()=>{   
     // read properties for the first record in array
     let cols = Object.keys(this.state.products[0]);
     // updatin the colHeaders with properties
     // from 0th record of products array 
     this.setState({columnHeaders: cols}, ()=> {
     });   
    });
  }


   
  handleUIChange=(evt)=> {
      // to update all UI elements with its name
      // use the [evt.target.name] array. An array elements containing
      // element name
      this.setState({[evt.target.name]:evt.target.value}); 
  }

  clear=()=>{
      this.setState({ProductId:0});
      this.setState({ProductName:''});
      this.setState({CategoryName:''});
      this.setState({Manufacturer:''});
      this.setState({Description:''});
      this.setState({BasePrice:0});
  }
  save=()=>{
      
        // to update the array type state property do the following
        var prd = {
            ProductId: this.state.ProductId,
            ProductName: this.state.ProductName,
            CategoryName: this.state.CategoryName,
            Manufacturer: this.state.Manufacturer,
            Description: this.state.Description,
            BasePrice: this.state.BasePrice
        };
    
        let prds = this.logic.addProduct(prd);
        // update the products state using the prds
        // the ()=>{} (ballback) will make sure that
        // the update state is mutated in the state property
        // generally this is implemented for <select> elements to update state 
        // on change event  of <select> element
        this.setState({products:prds},()=>{});
        console.log(`Products ${JSON.stringify(this.state.products)}`);
  }
    getCategoryName=(value)=>{
        this.setState({CategoryName:value});
        
    }
    getManufacturerName=(value)=>{
        this.setState({Manufacturer:value});
        
    }
  handleTableRowClick=(prd)=>{
     
    this.setState({ProductId:prd.ProductId});
    this.setState({ProductName:prd.ProductName});
    this.setState({CategoryName:prd.CategoryName});
    this.setState({Manufacturer:prd.Manufacturer});
    this.setState({Description:prd.Description});
    this.setState({BasePrice:prd.BasePrice});
  }
 
  render(){
      return (
          <div className="container">
              <div className="form-group">
                  <label>Product Id</label>
                  <input type="text" className="form-control" value={this.state.ProductId}
                  name="ProductId"
                   onChange={this.handleUIChange.bind(this)}></input>
              </div>
              <div className="form-group">
                  <label>Product Name</label>
                  <input type="text" className="form-control" value={this.state.ProductName}
                   name="ProductName"
                   onChange={this.handleUIChange.bind(this)}></input>
              </div>
              <div className="form-group">
                  <label>Category Name</label>
                  {/* <select className="form-control" value={this.state.CategoryName}
                  onChange={this.handleUIChange.bind(this)}
                   name="CategoryName">
                      <option>Select Category Name</option>
                      {
                        //   the 'key' attribute is the index of UI element
                        // while generating the element at runtine 
                          this.state.categories.map((cat,idx)=>(
                          <option key={idx} value={cat}>{cat}</option>
                          ))
                      }  

                   </select> */}

                   {/* Use the SelectComponent 
                      selectedValue will set the value selected from
                      SelectComponent to getCategoryName() method
                   */}
                   <SelectComponent pvalue={this.state.CategoryName}
                     dataSource={this.state.categories}
                     selectedValue={this.getCategoryName.bind(this)}></SelectComponent>
              </div>
              <div className="form-group">
                  <label>Manufacturer</label>
                  {/* <select className="form-control" value={this.state.Manufacturer}
                  onChange={this.handleUIChange.bind(this)}
                   name="Manufacturer">
                        <option>Select Manufacturer Name</option>
                      {
                        //   the 'key' attribute is the index of UI element
                        // while generating the element at runtine 
                          this.state.manufacturers.map((man,idx)=>(
                          <option key={idx} value={man}>{man}</option>
                          ))
                      }  

                   </select> */}

                    <SelectComponent pvalue={this.state.Manufacturer}
                     dataSource={this.state.manufacturers}
                     selectedValue={this.getManufacturerName.bind(this)}></SelectComponent>
              </div>
              <div className="form-group">
                  <label>Description</label>
                  <input type="text" className="form-control" value={this.state.Description} 
                  onChange={this.handleUIChange.bind(this)}
                  name="Description"></input>
              </div>
              <div className="form-group">
                  <label>Base Price</label>
                  <input type="text" className="form-control" value={this.state.BasePrice} 
                  onChange={this.handleUIChange.bind(this)} 
                  name="BasePrice"></input>
              </div>

              <div className="form-group">
                  <input type="button" value="Clear" onClick={this.clear.bind(this)} className="btn btn-warning"></input>
                  <input type="button" value="Save" onClick={this.save.bind(this)} className="btn btn-success"></input>
              </div>
              <br/>
               {/* Hard Coded Table */}
              {/* <table className="table table-bordered table-striped table-dark">
                  <thead>
                      <tr>
                          <th>
                              Product Id
                          </th>
                          <th>
                              Product Name
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                      {
                          this.state.products.map((prd,idx)=>(
                              <tr key={idx}>
                                  <td>{prd.ProductId}</td>
                                  <td>{prd.ProductName}</td>
                              </tr>
                          ))
                      }
                  </tbody>
              </table> */}

                {/* Generate Table Dynamically */}
                <table className="table table-bordered table-striped table-dark">
                    <thead>
                        <tr>
                       {
                           this.state.columnHeaders.map((cols,idx)=>(
                           <th key={idx}>{cols}</th>
                           ))
                       }
                       </tr>
                    </thead>    
                    <tbody>
                        {
                            this.state.products.map((prd,idx)=>(
                                // passing value from HTML element
                                // to the method in component
                                <tr key={idx} onClick={()=> {this.handleTableRowClick(prd)}}>
                                    {
                                        // Iterate over each property of the
                                        // prd to read its value
                                         this.state.columnHeaders.map((cols,i)=>(
                                            <td key={i}>{prd[cols]}</td>
                                            ))
                                    }
                                </tr>    
                            ))
                        }
                    </tbody>
                </table> 

          </div>
      );
  }
}

export default ProductComponent;