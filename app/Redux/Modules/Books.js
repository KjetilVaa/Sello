import {geoFire} from "../../Config/Constants"
import {Alert} from "react-native"

const SET_BOOKS = "SET_BOOKS"
const ADD_LISTENER = "ADD_LISTENER"
const REMOVE_BOOKS = "REMOVE_BOOKS"
const INIT_FINISHED = "INIT_FINISHED"
const CLEAR_BOOKS = "CLEAR_BOOKS"
const SAVE_GEOQUERY = "SAVE_GEOQUERY"
const INIT_NOT_FINISHED = "INIT_NOT_FINISHED"

function setBooks(books){
    return{
        type: SET_BOOKS,
        books
    }
}

function removeBooks(books){
    return {
        type: REMOVE_BOOKS,
        books
    }
}

export function clearBooks(){
    return {
        type: CLEAR_BOOKS,
    }
}

function addListener(){
    return {
        type: ADD_LISTENER
    }
}

function initFinished(){
    return{
        type: INIT_FINISHED,
    }
}

export function initNotFinished(){
    return {
        type: INIT_NOT_FINISHED,
    }
}

function saveGeoQuery(query){
    return{
        type: SAVE_GEOQUERY,
        query,
    }
}

//center here is lat and long
export function setAndFetchGeoFireQuery(center, radius, changed){
    return function(dispatch){
        console.log(center, radius)
        var geoQuery = geoFire.query({
            center: center,
            radius: parseInt(radius),
        })
        dispatch(saveGeoQuery(geoQuery))

        //Ready vil si at init er ferdig - blir resatt ved queryUpdate
        geoQuery.on("ready", function(books){
            dispatch(initFinished())
        })
        geoQuery.on("key_entered", function(books){
            book = books.split("*")
            newBooks = {
                uid: book[0],
                displayName: book[1],
                photoURL: "1",
                title: book[2],
                year: book[3],
                author: book[4],
                price: book[5],
                used: book[6]
            }
            dispatch(setBooks(newBooks))
        })
        geoQuery.on("key_exited", function(books){
            //ADD FUNCTIONALITY
            console.log("Book exited!", books)
        })
    }
}





const initialState = {
    books: [],
    listenerSet: false,
    initFinished: false,
    geoquery: "",
}


export function Books(state=initialState, action){
    switch (action.type) {
        case SET_BOOKS:
        return {
            ...state,
            books: [...state.books, action.books]
        }
        case REMOVE_BOOKS:
        index = state.indexOf(action.books)
        newBooks = state.books.slice(index, 1)
        return {
            ...state,
            books: newBooks,
        }
        case ADD_LISTENER:
        return {
            ...state,
            listenerSet: true
        }
        case INIT_FINISHED:
        return {
            ...state,
            initFinished: true
        }
        case CLEAR_BOOKS:
        return {
            ...state,
            books: [],
        }
        case SAVE_GEOQUERY:
        return {
            ...state,
            geoquery: action.query,
        }
        case INIT_NOT_FINISHED:
        return {
            ...state,
            initFinished: false,
        }
        default:
            return state
    }
}
