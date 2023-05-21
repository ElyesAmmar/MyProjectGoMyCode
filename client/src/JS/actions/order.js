import { ADD_PRODUCTS_ORDER, ADD_CLIENT_ORDER, SAVE_ORDER } from "../constant/actionsTypes";
import axios from 'axios'

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

export const SaveOrder = (order) => async(dispatch)=>{
    try {
        let result = await axios.post('/api/orders/addorder', order)
        dispatch({
            type:SAVE_ORDER,
            payload: result.data.msg
        })
    } catch (error) {
        console.log(error)
    }
}