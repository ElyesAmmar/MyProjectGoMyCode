import {USER_LOGIN, USER_LOGOUT, USER_REGISTER, LOAD_USER, AUTH_ERRORS} from '../constant/actionsTypes'

const initialeState = {
    isLoading : true,
    user:{},
    isAuth: false,
    msg: ''
}


export const userReducer = (state= initialeState, {type, payload})=>{
    
    switch (type) {
        case USER_REGISTER:
            localStorage.setItem("token", payload.token)
            return {... state, isLoading:false, isAuth:true, user: payload.user, msg:payload.msg}
        case USER_LOGIN:
            localStorage.setItem("token", payload.token)
           return {... state, isLoading:false, isAuth:true, user: payload.user, msg:payload.msg}
           
    
        default:
            return state;
    }
}
