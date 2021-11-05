
import { combineReducers } from "redux"
import openReducer from "./music"
const rootReducer = combineReducers({
    data: openReducer
})
export default rootReducer;