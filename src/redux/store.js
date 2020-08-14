import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { citiesReducer } from './reducers/citiesReducer'
import thunk from 'redux-thunk'

const initialState = {}

const reducer = combineReducers({
    cities: citiesReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))
export default store;