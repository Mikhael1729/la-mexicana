import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { StoreState, reducers } from './reducers'

/*
 * We're giving State interface to create store
 * store is type of State defined in our reducers
 */
const store = createStore<StoreState>(reducers)

export default store;