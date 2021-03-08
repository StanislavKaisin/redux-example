import "./styles.css";
import { createStore } from "./createStore.js";
import { rootReducer } from "./redux/rootReducer";

const counter = document.getElementById("counter");
const addBtn = document.getElementById("add");
const removeBtn = document.getElementById("remove");
const asyncBtn = document.getElementById("async");
const themeBtn = document.getElementById("theme");

const store = createStore(rootReducer, 0);

// console.log("store=", store);
// window.store = store;

addBtn.addEventListener("click", () => {
  store.dispatch({ type: "INCREMENT" });
});

removeBtn.addEventListener("click", () => {
  store.dispatch({ type: "DECREMENT" });
});

asyncBtn.addEventListener("click", () => {
  // setTimeout(() => {
  //   state++;
  //   render();
  // }, 2000);
});

themeBtn.addEventListener("click", () => {});

store.subscribe(() => {
  console.log("store.getState()=", store.getState());
  const state = store.getState();
  counter.textContent = state;
});
//send anything to get state (initial) back
store.dispatch({ type: "INIT_APPLICATION" });

// store.getState();
// store.dispatch({ type: "TEST" });
// store.dispatch({ type: "INCREMENT" });
