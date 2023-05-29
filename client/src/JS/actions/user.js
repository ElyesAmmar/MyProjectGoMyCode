import {USER_LOGIN, USER_LOGOUT, USER_REGISTER, LOAD_USER, AUTH_ERRORS, GET_AUTH_USER} from '../constant/actionsTypes'
import axios from 'axios';



export const userRegister = (formData)=> async(dispatch)=>{
    try {
        const response = await axios.post('/api/users/register', formData)
        
        dispatch({
            type: USER_REGISTER,
            payload: response.data
        })
    } catch (error) {
       console.log(error)
    }
}
export const userLogin = (formData)=> async(dispatch)=>{
    try {
        const response = await axios.post('/api/users/login', formData)
        
        dispatch({
            type: USER_LOGIN,
            payload: response.data
        })
    } catch (error) {
       console.log(error)
    }
}

export const getAuthUser = ()=> async(dispatch)=>{
    try {
        const config = {
            headers : {
                "x-auth-token": localStorage.getItem('token')
            }
        }
        const result = await axios.get('/api/users/', config)
        dispatch({
            type: GET_AUTH_USER,
            payload: result.data
        })
        
    } catch (error) {
        dispatch({type: AUTH_ERRORS})
    }
}