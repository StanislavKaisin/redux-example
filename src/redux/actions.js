import {
  INCREMENT,
  DECREMENT,
  ASYNC_INCREMENT,
  CHANGE_THEME,
  ENABLE_BUTTONS,
  DISABLE_BUTTONS,
} from "./types";

export function increment() {
  return { type: INCREMENT };
}

export function decrement() {
  return { type: DECREMENT };
}

export function asyncIncrement() {
  console.log("asyncIncrement");
  return function (dispatch) {
    dispatch(disableButtons());
    setTimeout(() => {
      // dispatch({ type: ASYNC_INCREMENT });
      dispatch(increment());
      dispatch(enableButtons());
    }, 5000);
  };
  // return { type: ASYNC_INCREMENT };
}

export function changeTheme(newTheme) {
  return { type: CHANGE_THEME, payload: newTheme };
}

export function enableButtons() {
  return { type: ENABLE_BUTTONS };
}

export function disableButtons() {
  console.log("disableButtons");

  return { type: DISABLE_BUTTONS };
}
