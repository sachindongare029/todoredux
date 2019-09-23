import { ADD_TODO } from "./constants";

export function addTodo(payload) {
  return { type: ADD_TODO, payload };
}