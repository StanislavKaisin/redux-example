import { INCREMENT, DECREMENT, ASYNC_INCREMENT } from "./types";

export function increment() {
  return { type: INCREMENT };
}

export function decrement() {
  return { type: DECREMENT };
}

export function asyncIncrement() {
  return function (dispatch) {
    setTimeout(() => {
      // dispatch({ type: ASYNC_INCREMENT });
      dispatch(increment());
    }, 2000);
  };
  // return { type: ASYNC_INCREMENT };
}
