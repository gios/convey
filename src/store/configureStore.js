import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { routeReducer } from 'redux-simple-router'

import counter from '../reducers/counter'

const finalCreateStore = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

const reducer = combineReducers({
  counter,
  routing: routeReducer
})

export default function configureStore(initialState) {
  return finalCreateStore(reducer, initialState)
}
