import React, { Component } from 'react';
import  GetProductsRequestComponent from './views/getproductsrequestcomponent';
import ListProductsComponent from './views/ListProductsComponent';
import KistProductsComponent from './views/ListProductsComponent';

const MainSagaComponent=()=>(
    <div>
        <GetProductsRequestComponent></GetProductsRequestComponent>
        <hr/>
        <ListProductsComponent></ListProductsComponent>
    </div>
);

export default MainSagaComponent;