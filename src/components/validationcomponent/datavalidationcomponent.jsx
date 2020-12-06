import React, { Component } from 'react';
class DataValidationComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            ProductId:0,
            ProductName:'',
            isProductIdValid:true,
            isProductNameValid:true,
            isSubmitEnabled: false
        }
    }


    handleChanges=(evt)=>{
        this.setState({[evt.target.name]:evt.target.value}, ()=>{
            this.inputValdiations(evt.target.name,evt.target.value);
        });
    }


    // logic for validations
    inputValdiations=(name,value)=>{
        console.log();
        switch(name) {
            case 'ProductId':
                    if(value.length === 0 || value.length > 10 || parseInt(value) < 0) {
                        this.setState({isProductIdValid:false});
                        this.setState({isSubmitEnabled:false});
                    } else {
                        this.setState({isProductIdValid:true});
                        this.setState({isSubmitEnabled:true});
                    }
                break;
            case 'ProductName':
                if(value.length === 0 || value.length > 10 ) {
                    this.setState({isProductNameValid:false});
                    this.setState({isSubmitEnabled:false});
                } else {
                    this.setState({isProductNameValid:true});
                    this.setState({isSubmitEnabled:true});
                }
                break;  
            default:
                break;      
        }
    }


    save=()=>{
        alert('Savedß');
    }

    render() { 
        return (  
            <div className="container">
                <form name="frmproduct">
                    <div className="form-group">
                        <label>ProductId</label>
                        <input type="text" className="form-control"
                         name="ProductId" onChange={this.handleChanges.bind(this)}
                         />
                         <div className="alert alert-danger"
                           hidden={this.state.isProductIdValid}>
                             Product Id is mandatory
                         </div>
                    </div>
                    <div className="form-group">
                        <label>ProductName</label>
                        <input type="text" className="form-control"
                         name="ProductName" onChange={this.handleChanges.bind(this) }
                         />
                         <div className="alert alert-danger"
                           hidden={this.state.isProductNameValid}>
                             Product Name is mandatory
                         </div>
                    </div>
                    <div className="form-group">
                         <input type="submit" value="Save" className="btn btn-success"
                          disabled={!this.state.isSubmitEnabled}/>
                    </div>
                </form>
            </div>
        );
    }
}
 
export default DataValidationComponent;