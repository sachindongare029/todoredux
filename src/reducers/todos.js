import { ADD_TODO, TOGGLE_TODO } from "../actions/constants.js";

const initialState = {
  todos: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_TODO) {
    return Object.assign({}, state, {
      todos: state.todos.concat(action.payload)
    });
  }
  if (action.type === TOGGLE_TODO) {
    state.todos.map(el => {
      if (action.payload === el.id) {
        return (el.isCompleted = !el.isCompleted);
      } else {
        return el;
      }
    });
  }
  return state;
}

export default rootReducer;
