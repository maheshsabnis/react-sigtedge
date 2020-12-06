import React, { Component } from 'react';
// impprting HttpService
import {HttpService} from './../../services/httpservices';
class ServiceComponent extends Component {
    constructor(props) {
        super(props);      
        this.state = {  
            products:[]
        };
       // all other instances must be created after
        // the state is defined for the component
     this.serv = new HttpService();
    }


    // the method  that will contains
    // resource intensive operations e.g. AJAX calls
    componentDidMount=()=>{
        console.log('Compone nt did mount');
       this.loadData();
    }

    loadData(){
        this.serv.getData()
        .then((response)=> {
            this.setState({products: response.data},()=>{
                console.log(`Received Data ${JSON.stringify(this.state.products)}`);
            });
        })
        .catch((error)=>{
            console.log(`Error Occured ${error}`);
        });
    }
 
    handleGetClick=()=>{
        this.loadData();
    }

    handleSaveClick=()=>{
        const prd = {
            ProductId:'Prd0002',
            ProductName: 'Router',
            CategoryName: 'Electronics',
            Manufacturer: 'IBM',
            Description:'100GBPS',
            BasePrice:1000
        };
        this.serv.postData(prd).then((response)=>{
            console.log(`Receined Data ${JSON.stringify(response.data)}`);
        }).catch((error)=>{
            console.log(`Error Occured ${error}`);
        });
    }


    render() { 
        console.log('Render is called');
        return ( 
            <div className="container">
                <h2>The Service Component</h2>
                <input type="button" value="Get Data"
                 onClick={this.handleGetClick.bind(this)}></input>
                <hr/>
                <input type="button" value="Post Data"
                 onClick={this.handleSaveClick.bind(this)}></input>
                 <hr/>
                 <strong>
                     <h3>Received Data</h3>
                     {JSON.stringify(this.state.products)}
                 </strong>
            </div>
        );
    }
}
 
export default ServiceComponent;