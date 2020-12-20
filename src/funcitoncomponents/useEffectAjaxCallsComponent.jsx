import React, { useEffect, useState } from 'react';
import TableComponentContext from './tableComponentContext';
import {DataContext} from './datacontext';

import {HttpService} from './../services/httpservices';

const UseEffectAjaxCallsComponent=()=>{

    // instance of HttpService class
    const serv = new HttpService();

    const [products, addProduct] = useState([]);

    // call to HttpService

    useEffect(()=>{
        serv.getData().then((response)=>{
            addProduct(response.data);
        }).catch((error)=>{
            console.log(`Error Occured ${error}`);
        });
    },[]); //--> The dependency parameter to complete an execution of useEffect()


    return(
        <div className="container">
          <h2>The Ajax call using useEffect</h2>
          <DataContext.Provider value={products}>
            <TableComponentContext></TableComponentContext>
          </DataContext.Provider>
        </div>
    );
};

export default UseEffectAjaxCallsComponent;

