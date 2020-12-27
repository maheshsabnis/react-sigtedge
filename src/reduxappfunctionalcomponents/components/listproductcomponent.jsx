import React from 'react';

const ListProductsComponent=(props)=>{

    if(props.listProducts === undefined || props.listProducts.length === 0) {
       return (
        <div className="container">
        <strong> No Data Received from Store</strong>
      </div> 

       )
    } else {

    return (
        <div className="container">
           <div>
             <strong>Data received from Stiore</strong>
           </div>
           <table className="table table-bordered table-dark table-striped">
             <thead>
                <tr>
                    <td>
                        ProductId
                    </td>
                    <td>
                       Product Name
                    </td>
                </tr>
             </thead>
             <tbody>
               {
                    props.listProducts.map((prd,idx)=>(
                        <tr key={idx}>
                           <td>
                              {prd.product.ProductId}
                           </td>
                           <td>
                              {prd.product.ProductName }
                           </td>
                        </tr>
                    ))
               }
             </tbody>
           </table>
        </div>
    );
            }
};

export default ListProductsComponent;
