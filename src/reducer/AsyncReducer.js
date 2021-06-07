import { ASYNC_CALL_STARTED, ASYNC_CALL_SUCCESS, ASYNC_CALL_FAILURE } from "../actions/ActionTypes";

const initialState = {
  posts: [],
};

function AsyncReducer(state = initialState, action) {
  switch (action.type) {
    case ASYNC_CALL_STARTED:
      console.log("api Started");
      return state;
    case ASYNC_CALL_SUCCESS:
      console.log("api success");
      return {
        posts: [...state.posts, action.payload]
      };
    case ASYNC_CALL_FAILURE:
      console.log("api Fail");
      return state;
    default:
      return state;
  }
}

export default AsyncReducer;