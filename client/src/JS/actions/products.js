import { GET_PRODUCT_LOAD, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAIL, GET_ONEPRODUCT_SUCCESS, POST_PRODUCT_FAIL,
        GET_ONEPRODUCT_FAIL, POST_PRODUCT_SUCCESS, SEARCH_PRODUCT, UPDATE_PRODUCT} from "../constant/actionsTypes";
import axios from "axios"

export const getProducts =()=> async (dispatch)=> {
    
    dispatch({type:GET_PRODUCT_LOAD})
    try {
        let result = await axios.get('/api/products/')
        
        dispatch({
            type: GET_PRODUCT_SUCCESS,
            payload: result.data.response
        })
    } catch (error) {
        console.log(error)
        dispatch({
            type: GET_PRODUCT_FAIL,
            payload: error
        })
    }
}

export const postProduct =(newproduct)=> async (dispatch)=> {
    
    try {
            let result = await axios.post('/api/products/addproduct', newproduct )
        
        dispatch({
            type: POST_PRODUCT_SUCCESS,
            payload: result.data.msg
        })
    } catch (error) {
        console.log(error.response.data.msg)
        dispatch({
            type: POST_PRODUCT_FAIL,
            payload: error.response.data.msg
        })
    }
}

export const getProductById =(id)=> async(dispatch)=>{
    
    console.log(id)
    try {
        let result = await axios.get(`/api/products/product/${id.id}`)
        
        dispatch({
            type: GET_ONEPRODUCT_SUCCESS,
            payload: result.data.response
        })
    } catch (error) {
        console.log(error)
        dispatch({
            type: GET_ONEPRODUCT_FAIL,
            payload: error.data.msg
        })
    }

}

export const updateProduct= (id,update) => async(dispatch)=>{
    try {
        console.log(id)
        console.log(update)
       let result =  await axios.put(`/api/products/edit/${id}`, update )
        dispatch({
            type: UPDATE_PRODUCT,
            payload: result.data.msg
        })
    } catch (error) {
     console.log(error)
        
    }
}

export const searchP =(input)=>{
    return {
        type : SEARCH_PRODUCT,
        payload: input
    }
}




