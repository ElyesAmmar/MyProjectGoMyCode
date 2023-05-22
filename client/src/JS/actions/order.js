import { ADD_PRODUCTS_ORDER, ADD_CLIENT_ORDER, SAVE_ORDER, GET_ORDERS_LOAD, GET_ORDERS_SUCCESS, GET_ORDERS_FAIL, GENERATE_INVOICE } from "../constant/actionsTypes";
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

export const getOrders = () => async(dispatch)=>{
    dispatch({
        type: GET_ORDERS_LOAD
    })
    try {
        let result = await axios.get('/api/orders/')
        console.log(result)
        dispatch({
            type: GET_ORDERS_SUCCESS,
            payload: result.data.response
        })
    } catch (error) {
        console.log(error)
        dispatch({
            type: GET_ORDERS_FAIL,
            payload: error.response.data.msg
        })
        
    }
}

export const generateInvoice= (id)=> async(dispatch)=>{
    try {
        let result = await axios.get(`/api/orders/invoice${id}`)
        dispatch({
            type: GENERATE_INVOICE,
            payload: result
        })
    } catch (error) {
        
    }
}