import { GET_ALL_USER_REQUEST, GET_ALL_USER_REQUEST_FAIL, GET_ALL_USER_REQUEST_SUCCESS, USER_LOGIN_REQUEST, USER_LOGIN_REQUEST_FAIL, USER_LOGIN_REQUEST_SUCCESS, USER_LOGOUT, USER_SIGNUP_REQUEST, USER_SIGNUP_REQUEST_FAIL, USER_SIGNUP_REQUEST_SUCCESS } from "../constant/userContant"


export const userReducer = (state = { users: [], login: {} }, { type, payload }) => {

    switch (type) {
        case USER_SIGNUP_REQUEST: return { isLoading: true }
        case USER_SIGNUP_REQUEST_SUCCESS: return { isLoading: false, isAdded: true }
        case USER_SIGNUP_REQUEST_FAIL: return { isLoading: false, error: payload }

        case USER_LOGIN_REQUEST: return { isLoading: true }
        case USER_LOGIN_REQUEST_SUCCESS: return { isLoading: false, login: payload }
        case USER_LOGIN_REQUEST_FAIL: return { isLoading: false, error: payload }

        case GET_ALL_USER_REQUEST: return { ...state, isLoading: true }
        case GET_ALL_USER_REQUEST_SUCCESS: return { ...state, isLoading: false, users: payload }
        case GET_ALL_USER_REQUEST_FAIL: return { ...state, isLoading: false, error: payload }

        case USER_LOGOUT: return {}


        default: return state

    }



}