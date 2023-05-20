import { ADD_PRODUCTS_ORDER } from "../constant/actionsTypes";

const initialeState = {
    orders:[],
    order:{},
    products:[{Id: 2, Name: 'BARRETTE MÉMOIRE TEAM GROUP'},{Id: 2, Name: 'BARRETTE MÉMOIRE TEAM GROUP'}],
    product:{},
    errors:[]
}

export const orderReducer = (state=initialeState, {type,payload})=>{
    switch (type) {
        case ADD_PRODUCTS_ORDER:
            return {...state, products: [...state.products,  payload]}
    
        default:
            return state
    }
}