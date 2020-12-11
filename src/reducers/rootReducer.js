import { combineReducers } from "redux";

import basicReducer from './basicReducer'
import todoReducer from './todoReducer'

const rootReducer = combineReducers({
  basic: basicReducer,
  todos: todoReducer
});

export default rootReducer;