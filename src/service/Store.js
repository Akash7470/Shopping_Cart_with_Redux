import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import CombineReducer from "./reducers/CombineReducer";

export const store = createStore(CombineReducer, applyMiddleware(thunk));
