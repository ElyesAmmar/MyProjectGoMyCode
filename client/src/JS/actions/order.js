import { ADD_PRODUCTS_ORDER } from "../constant/actionsTypes";

export const addProduct = (product)=>{
    return{
        type:ADD_PRODUCTS_ORDER,
        payload: product
    }
    
}