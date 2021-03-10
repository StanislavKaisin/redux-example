import "./styles.css";
// import { createStore } from "./createStore.js";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./redux/rootReducer";
// import { DECREMENT, INCREMENT } from "./redux/types";
import { asyncIncrement, decrement, increment } from "./redux/actions";

const counter = document.getElementById("counter");
const addBtn = document.getElementById("add");
const removeBtn = document.getElementById("remove");
const asyncBtn = document.getElementById("async");
const themeBtn = document.getElementById("theme");

const store = createStore(rootReducer, 0, applyMiddleware(thunk));

// console.log("store=", store);
// window.store = store;

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

themeBtn.addEventListener("click", () => {});

store.subscribe(() => {
  // console.log("store.getState()=", store.getState());
  const state = store.getState();
  counter.textContent = state;
});
//send anything to get state (initial) back
store.dispatch({ type: "INIT_APPLICATION" });

// store.getState();
// store.dispatch({ type: "TEST" });
// store.dispatch({ type: "INCREMENT" });
