import { ADD_TODO, TOGGLE_TODO } from "./constants";

export function addTodo(payload) {
  return { type: ADD_TODO, payload: {...payload, isCompleted: false} };
}

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload:id
});