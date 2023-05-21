import { ADD_PRODUCTS_ORDER, ADD_CLIENT_ORDER, SAVE_ORDER } from "../constant/actionsTypes";

const initialeState = {
    orders:[],
    order:{},
    products:[],
    product:{},
    client:{},
    errors:[],
    msg : ''
}

export const orderReducer = (state=initialeState, {type,payload})=>{
    switch (type) {
        case ADD_PRODUCTS_ORDER:
            return {...state, products: [...state.products, payload]}
        case ADD_CLIENT_ORDER:
            return {...state, client: payload}
        case SAVE_ORDER:
            return {...state, msg : payload }
        default:
            return state
    }
}