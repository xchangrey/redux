//Redux: Define a Redux Action
//
//in redux, all state updates are triggered by dispatching actions. An action is simply a JS object that contains information about an action event that has occurred. 
//
//While data is optional, actions must carry a 'type' property that specifies the type of action that occured.
//
//Think of Redux actions as messengers that deliver information about events happening in your app to the Redux store. The store then conducts the business of updating state based on the action that occurred.
//
//Writing a Redux action is as simple as declaring an object with a type property. 

// Define an action here:
const action = {
  type: 'LOGIN'
}