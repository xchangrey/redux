// Redux: Get State from the Redux Store
// 
// Retrieve the current state held in the redux store object with getState() 

const store = Redux.createStore(
  (state = 5) => state
);

// change code below this line
const currentState = store.getState();

