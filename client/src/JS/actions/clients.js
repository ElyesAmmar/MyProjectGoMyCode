import {GET_CLIENTS_LOAD, GET_CLIENTS_SUCCESS, GET_CLIENTS_FAIL, POST_CLIENT_SUCCESS, POST_CLIENT_FAIL} from '../constant/actionsTypes'
import axios from 'axios'

export const getClients=()=> async(dispatch)=>{
    dispatch({
        type:GET_CLIENTS_LOAD
    })
    try {
        const result = await axios.get('/api/clients/')
        dispatch({
            type:GET_CLIENTS_SUCCESS,
            payload:result.data.response
        })
    } catch (error) {
        console.log(error)
        dispatch({
            type: GET_CLIENTS_FAIL,
            payload: error
        })
    }

}

export const postClient =(client)=> async(dispatch)=>{
    try {
        let result = await axios.post('/api/clients/addclient', client)

        dispatch({
            type: POST_CLIENT_SUCCESS,
            payload: result.data.msg
        })
    } catch (error) {
        console.log(error)
        dispatch({
            type: POST_CLIENT_FAIL,
            payload: error
        })
        
        
    }
    dispatch(getClients())
}