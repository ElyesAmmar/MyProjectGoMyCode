import { ADD_PRODUCTS_ORDER } from "../constant/actionsTypes";

const initialeState = {
    orders:[],
    order:{},
    product:{},
    errors:[]
}

export const orderReducer = (state=initialeState, {type,payload})=>{
    switch (type) {
        case ADD_PRODUCTS_ORDER:
            return {...state, product:payload}
    
        default:
            return state
    }
}