//Redux: Dispatch an Action Event
//
//use dispatch method to dispatch action to redux store
//
//store.dispatch(), and passing the value returned from an action creator sends an action back to the store.
//
//actions creators return an object with a type property that specifies the action that has occurred.
//
const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Dispatch the action here:

store.dispatch(loginAction());
