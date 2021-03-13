import "./styles.css";
// import { createStore } from "./createStore.js";
import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { rootReducer } from "./redux/rootReducer";
// import { DECREMENT, INCREMENT } from "./redux/types";
import {
  asyncIncrement,
  decrement,
  increment,
  changeTheme,
} from "./redux/actions";
import { composeWithDevTools } from "redux-devtools-extension";

const counter = document.getElementById("counter");
const addBtn = document.getElementById("add");
const removeBtn = document.getElementById("remove");
const asyncBtn = document.getElementById("async");
const themeBtn = document.getElementById("theme");

// const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(thunk, logger),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

// console.log("store=", store);
// window.store = store;

//let's create own middleware
function myLogger(state) {
  return function (next) {
    return function (action) {
      console.log("Prev state=", state.getState());
      console.log("action=", action);
      const newState = next(action);
      console.log("Next state=", state.getState());
      return newState;
    };
  };
}

addBtn.addEventListener("click", () => {
  store.dispatch(increment());
});

removeBtn.addEventListener("click", () => {
  store.dispatch(decrement());
});

asyncBtn.addEventListener("click", () => {
  // setTimeout(() => {
  //   store.dispatch(increment());
  // }, 2000);
  store.dispatch(asyncIncrement());
});

themeBtn.addEventListener("click", () => {
  const newTheme = document.body.classList.contains("light") ? "dark" : "light";
  // console.log("newTheme=", newTheme);
  store.dispatch(changeTheme(newTheme));
});

store.subscribe(() => {
  // console.log("store.getState()=", store.getState());
  const state = store.getState();
  counter.textContent = state.counter;
  // document.body.className = state.theme.value;
  const newTheme = state.theme.value;
  // console.log("newTheme=", newTheme);
  document.body.className = newTheme;
  console.log("state.theme.disabled=", state.theme.disabled);
  [addBtn, removeBtn, themeBtn, asyncBtn].forEach(
    (btn) => (btn.disabled = state.theme.disabled)
  );
});
//send anything to get state (initial) back
store.dispatch({ type: "INIT_APPLICATION" });
