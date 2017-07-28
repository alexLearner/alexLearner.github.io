import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import people from "./people"

export default combineReducers({
	routing: routerReducer,
	people
})