import { ADD_PRODUCTS_ORDER, ADD_CLIENT_ORDER } from "../constant/actionsTypes";

export const addProductsOrder = (product)=>{
    return{
        type:ADD_PRODUCTS_ORDER,
        payload: product
    }
    
}
export const addClientOrder = (client)=>{
    return{
        type:ADD_CLIENT_ORDER,
        payload: client
    }     
}