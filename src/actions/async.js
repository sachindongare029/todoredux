import axios from "axios";
import {
  ASYNC_CALL_STARTED,
  ASYNC_CALL_SUCCESS,
  ASYNC_CALL_FAILURE,
} from "./ActionTypes";

export const callAsync = () => {
  return (dispatch) => {
    dispatch(asyncStarted());
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        dispatch(asyncSuccess(res.data));
      })
      .catch((err) => {
        dispatch(asyncFailure(err.message));
      });
  };
};

const asyncSuccess = (res) => ({
  type: ASYNC_CALL_SUCCESS,
  payload: {
    ...res,
  },
});

const asyncStarted = () => ({
  type: ASYNC_CALL_STARTED,
});

const asyncFailure = (error) => ({
  type: ASYNC_CALL_FAILURE,
  payload: {
    error,
  },
});
