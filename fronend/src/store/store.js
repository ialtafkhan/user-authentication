import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { userReducer } from './reducer/userReducer'

const localLogin = localStorage.getItem("signin")
    ? { login: JSON.parse(localStorage.getItem("signin")) }
    : {}


const rootReducer = combineReducers({
    Allusers: userReducer

})
const initialStatus = {
    Allusers: localLogin
}


const store = createStore(rootReducer, initialStatus, composeWithDevTools(applyMiddleware(thunk)))


export default store