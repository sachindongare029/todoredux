import { ADD_TODO } from "../actions/constants.js";

const initialState = {
  todos: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_TODO) {
    return Object.assign({}, state, {
      todos: state.todos.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;