import { ADD_PRODUCTS_ORDER, ADD_CLIENT_ORDER } from "../constant/actionsTypes";

const initialeState = {
    orders:[],
    order:{},
    products:[],
    product:{},
    client:{},
    errors:[]
}

export const orderReducer = (state=initialeState, {type,payload})=>{
    switch (type) {
        case ADD_PRODUCTS_ORDER:
            return {...state, products: [...state.products, payload]}
        case ADD_CLIENT_ORDER:
            return {...state, client: payload}
        default:
            return state
    }
}