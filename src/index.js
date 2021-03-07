import "./styles.css";

const counter = document.getElementById("counter");
const addBtn = document.getElementById("add");
const removeBtn = document.getElementById("remove");
const asyncBtn = document.getElementById("async");
const themeBtn = document.getElementById("theme");

let state = 0;

function render() {
  counter.textContent = state;
}

addBtn.addEventListener("click", () => {
  state++;
  render();
  // console.log("state=", state);
});

removeBtn.addEventListener("click", () => {
  state--;
  render();
  // console.log("state=", state);
});

asyncBtn.addEventListener("click", () => {
  setTimeout(() => {
    state++;
    render();
  }, 2000);
});

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

render();

// console.log("counter=", counter);
