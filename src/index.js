import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import 'antd/dist/antd.css'

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.payload
    case 'DECREMENT':
      return state - action.payload
    default:
      return state
  }
}

function users(state = { users: [], loading: false }, action) {
  switch (action.type) {
    case 'FETCH_USERS':
      return { ...state, users: action.payload }
    default:
      return state
  }
}

const rootReducer = combineReducers({ counter, users })

let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

store.subscribe(() => console.log({ state: store.getState() }))
store.dispatch({ type: 'INCREMENTS', payload: 10 })

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
