import { combineReducers } from "redux";
import { reducer as family } from "./family/ducks";

const rootReducer = combineReducers({ family: family });
export default rootReducer;
