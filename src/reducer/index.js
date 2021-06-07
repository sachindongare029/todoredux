import { combineReducers } from "redux";
import TodoReducer from "./TodoReducer";
import AsyncReducer from "./AsyncReducer";

const rootReducer = combineReducers({ TodoReducer, AsyncReducer });

export default rootReducer;
