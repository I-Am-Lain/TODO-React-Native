import { combineReducers } from "redux";

import basicReducer from './basicReducer'

const rootReducer = combineReducers({
  basic: basicReducer
});

export default rootReducer;