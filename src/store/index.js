import { applyMiddleware } from 'redux'
import { createStore, compose } from 'redux'
import thunk from 'redux-thunk'

import cReducer from './reducer'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(cReducer, composeEnhancers(applyMiddleware(thunk)))

export default store
