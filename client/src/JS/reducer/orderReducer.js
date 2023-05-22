import { ADD_PRODUCTS_ORDER, ADD_CLIENT_ORDER, SAVE_ORDER, GET_ORDERS_LOAD, GET_ORDERS_SUCCESS, GET_ORDERS_FAIL } from "../constant/actionsTypes";

const initialeState = {
    loadOrders: false,
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
        case GET_ORDERS_LOAD:
            return {...state, loadOrders: true}
        case GET_ORDERS_SUCCESS:
            return {...state, orders: payload}
        case GET_ORDERS_FAIL: 
            return {...state, msg: payload}
        default:
            return state
    }
}