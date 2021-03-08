export function createStore(rootReducer, initialState) {
  // closure here
  let state = rootReducer(initialState, { type: "__INIT__" });
  const subscribers = [];

  return {
    // action === {type : 'INCREMENT}
    dispatch(action) {
      state = rootReducer(state, action);
      subscribers.forEach((subscriber) => subscriber());
    },
    subscribe(callback) {
      subscribers.push(callback);
    },
    getState() {
      return state;
    },
  };
}

// interface IcreateStore = {
//   rootReducer: ()=> {}
// }

// interface IAction = {
//   type: typeof INCREMENT
// }
