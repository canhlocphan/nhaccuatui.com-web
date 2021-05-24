// libs
import { combineReducers } from "redux";
// reducers
import HomeReducer from "./Home";

const rootReducer = combineReducers({
  Home: HomeReducer,
});

export default (state, action) => rootReducer(state, action);
