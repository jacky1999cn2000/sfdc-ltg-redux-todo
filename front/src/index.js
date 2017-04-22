import {createStore, bindActionCreators, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
// import reducer from './reducers'
// import * as actionCreators from './actions'

let fuck = 'fuck';

export const stores = createStore(reducer, applyMiddleware(thunk))
export const actions = bindActionCreators(actionCreators, store.dispatch)
