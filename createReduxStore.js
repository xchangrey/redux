//Redux: Create a Redux Store
//
//a state management framework.
//
//the Redux store is the single source of truth when it comes to application state.
//
//unidirectional data flow with redux makes it easier to track state management in an app.
//

const reducer = (state = 5) => {
  return state;
}

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:

const store = Redux.createStore(reducer);

