import {combineReducers} from "redux"
import { productReducer} from "./productReducer"
import {clientReducer } from "./clientReducer"




const rootReducer = combineReducers({productReducer, clientReducer});


export default rootReducer;