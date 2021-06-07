import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./ActionTypes";

const addTodoAction = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

const removeTodoAction = (payload) => {
  return {
    type: REMOVE_TODO,
    payload,
  };
};

const toggleTodoAction = (payload) => {
  return {
    type: TOGGLE_TODO,
    payload,
  };
};

export { addTodoAction, removeTodoAction, toggleTodoAction };
