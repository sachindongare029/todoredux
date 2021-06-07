import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../actions/ActionTypes";

const initialState = {
  items: [],
};

function TodoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      let item = action.payload;
      return {
        items: [...state.items, item],
      };
    case REMOVE_TODO:
      let deleteTodo = action.payload;
      let newState = state.items.filter((item) => item.id !== deleteTodo.id);
      return Object.assign({}, newState);
    case TOGGLE_TODO:
      let toggleTodo = action.payload;
      let updatedArr = state.items.map((item) => {
        if (toggleTodo.id === item.id) {
          item.isCompleted = !item.isCompleted;
          return item;
        } else {
          return item;
        }
      });
      return Object.assign({}, updatedArr);
    default:
      return state;
  }
}

export default TodoReducer;
