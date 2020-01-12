import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import { Provider } from 'react-redux'
import App from './App'
import reducers from 'reducers'
import 'antd/dist/antd.css'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
let store = createStore(reducers, composeEnhancers(applyMiddleware(ReduxThunk)))

store.subscribe(() => console.log({ state: store.getState() }))
store.dispatch({ type: 'INCREMENTS', payload: 10 })

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
