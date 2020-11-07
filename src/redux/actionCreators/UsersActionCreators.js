import axios from 'axios';
import Cookie from 'js-cookie'
import * as ActionTypes from '../ActionTypes';
import { baseUrl } from '../../shared/baseUrl'


//SIGNIN USERS

export const signinUser = (email, password) => async (dispatch) => {

    try {
        dispatch({ type: ActionTypes.USER_SIGNIN_REQUEST, payload: { email, password } })
        const { data } = await axios.post("api/users/signin", { email, password })
        console.log("success")
        dispatch({ type: ActionTypes.USER_SIGNIN_SUCCESS, payload: data })
        Cookie.set('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({ type: ActionTypes.USER_SIGNIN_FAILED, payload: error.message })
        // console.log(error)
    }
}


//REGISTER  USERS
export const registerUser = (fName, lName, email, password) => async (dispatch) => {

    try {
        dispatch({ type: ActionTypes.USER_REGISTER_REQUEST, payload: { fName, lName, email, password } })
        const { data } = await axios.post("api/users/register", { fName, lName, email, password })
        console.log("success")
        dispatch({ type: ActionTypes.USER_REGISTER_SUCCESS, payload: data })
        Cookie.set('userReg', JSON.stringify(data))
    } catch (error) {
        dispatch({ type: ActionTypes.USER_REGISTER_FAILED, payload: error.message })
        // console.log(error)
    }
}


// export const signinUser = (email, password) => dispatch => {
//     const user = {
//         email: email,
//         password: password
//     }
//     return fetch(baseUrl + 'api/users/signin', {
//         method: 'POST',
//         mode: 'no-cors',
//         body: JSON.stringify(user),
//         credentials: 'same-origin'
//     })
//         .then(response => {
//             if (response.ok) {
//                 console.log("success")
//                 return response
//             }
//             else {
//                 let error = new Error(`Error ${response.status}: ${response.statusText}`)
//                 error.response = response
//                 throw error
//             }
//         }, error => {
//             let errmess = new Error(error.message)
//             throw errmess
//         })
//         .then(response => response.json())
//         .then(usr => dispatch(userSigninSuccess(usr)))
//         .catch(error => dispatch(userSigninFailed(error.message)))
// }

// export const userSigninFailed = errMess => ({
//     type: ActionTypes.USER_SIGNIN_FAILED,
//     payload: errMess,
// })

// export const userSigninSuccess = user => ({
//     type: ActionTypes.USER_SIGNIN_SUCCESS,
//     payload: user,
// })
