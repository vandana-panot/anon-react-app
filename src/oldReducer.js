export default function authReducer(state, action) {
  if (action.type === "newtaskAdded") {
    return [...state,{ id: 9}]
  }
}
import createStore from redux
const store = createStore(authReducer);
// export default store

// Now in js files import store then
store.dispatch({
  type: "newtaskAdded",
  payload: {
    id: 1
  }
})
// can subscribe to store
store.subscribe(() => {
  console.log(store.getState(), "state changed")
})
// action types
export const NEWTASKADDED = "newtaskAdded"

//  Repeated code so move code inside dispatch to actions.js
export const newtaskAdded = (id) => ({
  type: "newtaskAdded",
  payload: {
    id: 1
  }
})
store.dispatch(newtaskAdded(9))
