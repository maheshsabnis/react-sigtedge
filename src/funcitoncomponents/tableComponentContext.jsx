import React, { useContext } from 'react';

import {DataContext} from './datacontext';


const TableComponentContext=()=>{
    // subscribe to the DataContext and read its value
    // the 'dataContext' will have the object properties 
    // provided by 'value' object
    const dataContext = useContext(DataContext);
    // checking if any data is passed to this component
    // if the data is empty then do notheing just show message
    if(dataContext.length === 0){
        return (<div className="container">No records</div>);
    } else {
        // read properties from the dataContext
        let columns = [];
        // repad propertyies of keys of the 0th record
        columns = Object.keys(dataContext[0]);
        return (
              <div className="container">
                <table className="table table-striped table-bordered table-dark">
                   <thead>
                     {
                            columns.map((col,idx)=>(
                                <th key={idx}>{col}</th>
                            ))
                    }
                   </thead>
                   <tbody>
                     {
                         dataContext.map((record,index)=>(
                              <tr key={index}>
                              {
                                columns.map((col,idx)=>(
                                    <td key={idx}>{record[col]}</td>
                                ))
                        }
                              </tr>      

                         ))
                     }
                   </tbody>
                </table>
              </div>  

        )
    }
};

export default TableComponentContext;
