// define the action

const addProduct=(product)=>{
    // some other logic e.g. promises, etc.
    
    return {
        type: "ADD_PRODUCT", // the action that is dispatched and same will be returned
        product // the payload
    }
}

export default addProduct;