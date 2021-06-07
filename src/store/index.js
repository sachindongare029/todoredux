import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducer";

const composer = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
);

const initialState = {};

const Store = createStore(reducer, initialState, composer);

export default Store;
