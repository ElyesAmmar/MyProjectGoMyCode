import { ADD_PRODUCTS_ORDER } from "../constant/actionsTypes";

const initialeState = {
    orders:[],
    order:{},
    products:[],
    product:{},
    errors:[]
}

export const orderReducer = (state=initialeState, {type,payload})=>{
    switch (type) {
        case ADD_PRODUCTS_ORDER:
            return {...state, products:  payload}
    
        default:
            return state
    }
}