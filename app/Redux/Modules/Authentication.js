import {authWithToken, logout, logIn, updateUserInDatabase} from "../../API/Auth"
import {updateUser} from "./UserInfo"
import {Alert} from "react-native"
import {getFBFriends} from "../../API/Auth"

const AUTHENTICATING = "AUTHENTICATING"
const NOT_AUTH = "NOT_AUTH"
const IS_AUTH = "IS_AUTH"
const LOGGING_OUT = "LOGGING_OUT"
const ADD_TOKEN = "ADD_TOKEN"

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

export function isAuth(){
    return {
        type: IS_AUTH,
    }
}

export function addToken(token){
    return {
        type: ADD_TOKEN,
        token
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
        logIn().catch((error) => {
            Alert.alert("Something with the log in process went wrong. Check your internet connection and restart the app")
            console.log("Something with the log in process went wrong.", error.message)
        })
    }
}

export function handleUnauth(){
    return function(dispatch, getState){
        logout()
        dispatch(loggingOut())
    }
}

export function onAuthChanged(user){
    return function(dispatch, getState){
        dispatch(authenticating())
        if(!user){
            dispatch(notAuth())
        }
        else{
            const {displayName, photoURL, uid} = user
            dispatch(updateUser({displayName, photoURL, uid}))
            updateUserInDatabase(uid, {displayName, photoURL}).
            then(() => dispatch(isAuth()))
        }
    }
}

const initialState = {
    token: "",
    isAuthenticating: true,
    isAuth: false,
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
            ...state,
            isAuthenticating: false,
            isAuth: false,
        }
        case IS_AUTH:
        return {
            ...state,
            isAuthenticating: false,
            isAuth: true,
        }
        case ADD_TOKEN:
        return {
            ...state,
            token: action.token
        }
        default:
        return state
    }
}
