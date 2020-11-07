import * as ActionTypes from '../ActionTypes'

export const userSigninReducer = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.USER_SIGNIN_REQUEST:
            return { isLoading: true }
        case ActionTypes.USER_SIGNIN_FAILED:
            return { isLoading: false, error: action.payload }
        case ActionTypes.USER_SIGNIN_SUCCESS:
            return { isLoading: false, userInfo: action.payload };
        default:
            return state;
    }
}
export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.USER_REGISTER_REQUEST:
            return { isLoading: true }
        case ActionTypes.USER_REGISTER_FAILED:
            return { isLoading: false, error: action.payload }
        case ActionTypes.USER_REGISTER_SUCCESS:
            return { isLoading: false, userReg: action.payload };
        default:
            return state;
    }
}