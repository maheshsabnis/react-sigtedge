const reducer=(state=[], action)=>{
    switch (action.type){
        case 'GET_PRODUCTS':
              return {...state};
        case 'GET_PRODUCTS_SUCCESS':
                // the products reurned by SAGA as output action
                return {...state, products:action.products};       
        default:
              return state;       
    }
};

export default reducer;