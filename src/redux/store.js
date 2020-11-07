import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { citiesReducer } from './reducers/citiesReducer'
import { userRegisterReducer, userSigninReducer } from './reducers/usersReducer'
import thunk from 'redux-thunk'
import Cookie from 'js-cookie'

const userInfo = Cookie.getJSON('userInfo') || null
const userReg = Cookie.getJSON('userReg') || null
const initialState = { userSignin: userInfo, userRegister: userReg }
// console.log(initialState.userInfo)

const reducer = combineReducers({
    cities: citiesReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))
export default store;