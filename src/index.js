import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import { addTodo } from "./actions";

window.addTodo = addTodo;

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
window.store = store;

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
