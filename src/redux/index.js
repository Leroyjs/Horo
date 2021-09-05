import { createStore, combineReducers, applyMiddleware } from "redux";
import { accountReducer } from "./redusers/account";
import { compatibilityReducer } from "./redusers/compatibility";
import thunk from "redux-thunk";
import { configReducer } from "./redusers/config";

const rootReducer = combineReducers({
  account: accountReducer,
  compatibility: compatibilityReducer,
  config: configReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
