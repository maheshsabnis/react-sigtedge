// import the action

import addProduct from './../actions/action';

import {combineReducers} from 'redux';


// write the reducer functions. These are the pure functions.
// the first parameter is the state that will be updated in store
// this state is the older state that is used by reducer function to update based on action
// the second parameter is the action based on which the reducer will be executed  
export const addProductReducer=(state,action)=>{
    switch(action.type){
        case 'ADD_PRODUCT': {
            return {
                product:action.product // the returned product from action will be added in store
            }
        }
        default:
            return state; // return default state from the store
    }
};

// initially there is not data in state but it will be updated
// as the new products are added based on the ADD_PRODUCT Action
// even if not action is dispatched still the component
// must be shown with some daya from store
// thats why this new reducer function created
export const listProductReducer=(state=[],action)=>{
    switch(action.type){
        case 'ADD_PRODUCT': {
            // this reducer makes call to the addProductReducer and read the new product
            // updated in the store
            return [...state, addProductReducer(undefined, action)];  
            
        }
        default:
            return state; // return default state from the store
    }
} 

// the Most Important step combine all reducers and provide them to the redux

const rootReducer = combineReducers({listProductReducer});
export default rootReducer;