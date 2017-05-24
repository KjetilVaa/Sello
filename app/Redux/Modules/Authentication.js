import {authWithToken, logout, logIn} from "../../API/Auth"
import {updateUser} from "./UserInfo"

const AUTHENTICATING = "AUTHENTICATING"
const NOT_AUTH = "NOT_AUTH"
const IS_AUTH = "IS_AUTH"
const LOGGING_OUT = "LOGGING_OUT"

export function authenticating(){
    return {
        type: AUTHENTICATING,
    }
}

export function notAuth(){
    return {
        type: NOT_AUTH
    }
}

export function isAuth(uid){
    return {
        type: IS_AUTH,
        uid,
    }
}

export function loggingOut(){
    return {
        type: LOGGING_OUT
    }
}

export function handleAuthWithFirebase(){
    return function(dispatch, getState){
        dispatch(authenticating())
        logIn().then((userData) => {
            user = {
                displayName: userData.name,
                photoURL: userData.picture.data.url,
                fbFriends: userData.friends.data
            }
            dispatch(updateUser(user))
        }).catch((error) => console.log("Something with the login process went wrong.", error.message))
    }
}

export function handleUnauth(){
    return function(dispatch, getState){
        logout()
        dispatch(loggingOut())
    }
}

const initialState = {
    isAuthenticating: false,
    isAuth: false,
    uid: "",
}

export function Authentication(state = initialState, action){
    switch(action.type){
        case AUTHENTICATING:
        return {
            ...state,
            isAuthenticating: true,
        }
        case NOT_AUTH:
        return{
            uid: "",
            isAuthenticating: false,
            isAuth: false,
        }
        case IS_AUTH:
        return {
            uid: action.uid,
            isAuthenticating: false,
            isAuth: true,
        }
        default:
        return state
    }
}
