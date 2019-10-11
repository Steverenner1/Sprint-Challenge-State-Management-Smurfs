1. What problem does the context API help solve?
It is a way for a child component to access a value in a parent component.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Reducers tell how state changes in response to actions.
Actions minimize the responsibilities of our components, making them more simple.
The store is an object that holds the application’s state data.  It is knows as a single source of truth because the only way to change data is to dispatch redux action which will change the state in the reducer.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is global, component state is local.  Application state is globally stored in memory and easy to access.  

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux-thunk is a middleware that allows a call action creators that return a function instead of an action object.  It allows us to make an API call or trigger other actions, as it deals with functions as actions.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
The reducer pattern as it seems to be more predictable and less wordy.
