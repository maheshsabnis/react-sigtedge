// the saga middleweare code

import { HttpService } from "./../../services/httpservices";

import { call, put, takeLatest,all } from "redux-saga/effects";

// step 1: call method from the Http Service and resolve the promise
function getProductsFromService(){
    let serv = new HttpService();
    const response = serv.getData().then((result)=>result.data);

    // resolve the promise and return the resolved promise
    return Promise.resolve(response); 
}


// step 2: subscribe to the resolved promise from step 1 by calling the method
// dispatch the resultant action (SUCCESS/FAIL)
// yield call(getProductsFromService); will return the resolved response
// so that its can be processed
function* getResponseAction(){
    
    const response = yield call(getProductsFromService);

    // if the response is sucessful and contains data the dispatch
    // the resultant action
    yield put({
        type:'GET_PRODUCTS_SUCCESS',
        products: response || {error: 'ERROR_OCCURED'}
    });
} 

// step 3: watch the action dispacthed from the Component that is monitored
// by stored. Link ths input action with output action dispatched by step 2

function* mapInputGetActionToOutputSuccessAction(){
    yield takeLatest('GET_PRODUCTS', getResponseAction);
}


// step 4: creat root saga that will monitor all input and output actions
// this root saga will be configured as middleware with Redux Store
// and continuously running

export default function* rootSaga(){
    yield all([mapInputGetActionToOutputSuccessAction()]);
}