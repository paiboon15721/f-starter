import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
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
      return { ...state, loading: true }
    case 'FETCH_USERS_SUCCESS':
      return { ...state, users: action.payload, loading: false }
    default:
      return state
  }
}

const rootReducer = combineReducers({ counter, users })

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
let store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(ReduxThunk)),
)

store.subscribe(() => console.log({ state: store.getState() }))
store.dispatch({ type: 'INCREMENTS', payload: 10 })

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
