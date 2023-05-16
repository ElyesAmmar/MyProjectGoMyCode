import { GET_PRODUCT_LOAD, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAIL,GET_ONEPRODUCT_FAIL,
    POST_PRODUCT_SUCCESS, POST_PRODUCT_FAIL, SEARCH_PRODUCT, GET_ONEPRODUCT_SUCCESS, UPDATE_PRODUCT } from "../constant/actionsTypes";


const initialeState = {
      products: [],
      loadprod: false,
      product: {},
      errors: [],
      productSearch: "",
      update:""
}

export const productReducer=(state=initialeState, {type,payload})=>{

    switch (type) {
        case GET_PRODUCT_LOAD:
           return {...state , loadprod:true}
        case GET_PRODUCT_SUCCESS:
            return {...state, loadprod: false, products: payload}
        case GET_PRODUCT_FAIL:
               return {...state, loadprod: false, errors: payload}

        case GET_ONEPRODUCT_SUCCESS:
             return {...state,  product: payload} 
         case GET_ONEPRODUCT_FAIL:
                return {...state, errors: payload}

        case POST_PRODUCT_SUCCESS:
             return {...state,  product: payload} 
         case POST_PRODUCT_FAIL:
                return {...state, errors: payload}
        
        case UPDATE_PRODUCT:
            return {...state, update: payload}
        
        case SEARCH_PRODUCT:
            return {...state, productSearch: payload}      
        default:
            return state;
       }


}


