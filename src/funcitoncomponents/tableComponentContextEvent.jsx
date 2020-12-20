import React, { useContext } from 'react';

import {DataContext} from './datacontext';


const TableComponentContextEvent=()=>{
    // subscribe to the DataContext and read its value
    // the 'dataContext' will have the object properties 
    // provided by 'value' object
    const dataContext = useContext(DataContext);

    // since the dataContext has object with multiple properties
    // read these properties invividually and process them
    // value={{products, updateProduct}}
    // dataContext[0] --> products dataContext[1] --> updateProduct 

    const dataSource = dataContext[Object.keys(dataContext)[0]]; // products array
    const event = dataContext[Object.keys(dataContext)[1]]; // the updateProduct method




    // checking if any data is passed to this component
    // if the data is empty then do notheing just show message
    if(dataSource.length === 0){
        return (<div className="container">No records</div>);
    } else {
        // read properties from the dataContext
        let columns = [];
        // repad propertyies of keys of the 0th record
        columns = Object.keys(dataSource[0]);
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
                         dataSource.map((record,index)=>(
                              <tr key={index} onClick={()=>event(record)}>
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

export default TableComponentContextEvent;
