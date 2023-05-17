import {GET_CLIENTS_LOAD, GET_CLIENTS_SUCCESS, GET_CLIENTS_FAIL, POST_CLIENT_SUCCESS, POST_CLIENT_FAIL} from '../constant/actionsTypes'

const initialeState = {
    clients: [],
    loadprod: false,
    client: {},
    errors: [],
    msg:''
}

export const clientReducer=(state=initialeState, {type,payload})=>{
    switch (type) {
        case GET_CLIENTS_LOAD:
            return {...state , loadprod:true}
        case GET_CLIENTS_SUCCESS:
            return {...state , clients:payload}
        case GET_CLIENTS_FAIL:    
            return {...state , errors: payload}

        case POST_CLIENT_SUCCESS:
            return {...state , msg:payload}
        case POST_CLIENT_FAIL:    
            return {...state , errors: payload} 
            
        default:
            return state;
    }

}