import { combineReducers } from "redux";
import counter from "./counter";
import auth from "./auth";

const allReducer = combineReducers({counter, auth});

export default allReducer;