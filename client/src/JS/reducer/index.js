import {combineReducers} from "redux"
import { productReducer} from "./productReducer"
import {clientReducer } from "./clientReducer"
import {orderReducer} from "./orderReducer"




const rootReducer = combineReducers({productReducer, clientReducer,orderReducer});


export default rootReducer;