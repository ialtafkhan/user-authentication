import axios from "axios"
import { GET_ALL_USER_REQUEST, GET_ALL_USER_REQUEST_FAIL, GET_ALL_USER_REQUEST_SUCCESS, USER_LOGIN_REQUEST, USER_LOGIN_REQUEST_FAIL, USER_LOGIN_REQUEST_SUCCESS, USER_LOGOUT, USER_SIGNUP_REQUEST, USER_SIGNUP_REQUEST_FAIL, USER_SIGNUP_REQUEST_SUCCESS } from "../constant/userContant"



export const signUpAction = (fd) => async (dispacth) => {
    console.log(fd);
    try {
        dispacth({ type: USER_SIGNUP_REQUEST })
        const { data } = await axios.post(`/user/signup`, fd)
        console.log(data);
        dispacth({ type: USER_SIGNUP_REQUEST_SUCCESS, payload: data })
        // dispacth(signInAction({ email: fd.email, password: fd.password }))

    } catch (error) {
        dispacth({ type: USER_SIGNUP_REQUEST_FAIL, payload: error })

    }


}
export const signInAction = (fd) => async (dispacth) => {

    console.log(fd);
    try {
        dispacth({ type: USER_LOGIN_REQUEST })

        const { data } = await axios.post('/user/login', fd)
        console.log(data);
        if (data.result.token) {
            dispacth({ type: USER_LOGIN_REQUEST_SUCCESS, payload: data.result })
            localStorage.setItem("signin", JSON.stringify(data.result))
        } else {

            dispacth({ type: USER_LOGIN_REQUEST_FAIL, payload: "paswwoerd or email wrong" })
        }



    } catch (error) {

        dispacth({ type: USER_LOGIN_REQUEST_FAIL, payload: error })
    }


}

export const getAllUserAction = () => async (dispacth) => {

    try {
        dispacth({ type: GET_ALL_USER_REQUEST })
        const { data } = await axios.get(`/user`)
        console.log(data);
        dispacth({ type: GET_ALL_USER_REQUEST_SUCCESS, payload: data.result })
        // dispacth(signInAction({ email: fd.email, password: fd.password }))

    } catch (error) {
        dispacth({ type: GET_ALL_USER_REQUEST_FAIL, payload: error })

    }


}

export const logoutAction = () => async (dispacth) => {

    dispacth({ type: USER_LOGOUT })
    localStorage.removeItem("signin")

}