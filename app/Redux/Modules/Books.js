import {geoFire} from "../../Config/Constants"
import {Alert} from "react-native"

const SET_BOOKS = "SET_BOOKS"
const ADD_LISTENER = "ADD_LISTENER"
const REMOVE_BOOKS = "REMOVE_BOOKS"
const INIT_FINISHED = "INIT_FINISHED"

function setBooks(books){
    return{
        type: SET_BOOKS,
        books
    }
}

async function addPictureToBooks(books){
    newBooks = {}
    books.split("*")
    var book = books.split("*")
    await getProfilePicture(book[0]).then((snapshot) => {
        url = snapshot.val()
        newBooks = {
            uid: book[0],
            displayName: book[1],
            photoURL: url,
            title: book[2],
            year: book[3],
            author: book[4],
            price: book[5],
            used: book[6]
        }
    })
    console.log(newBooks)
    return newBooks
}

function removeBooks(books){
    return {
        type: REMOVE_BOOKS,
        books
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

//center here is lat and long
export function setAndFetchGeoFireQuery(center, radius){
    return function(dispatch){
        console.log(center, radius)
        var geoQuery = geoFire.query({
            center: center,
            radius: parseInt(radius),
        })
        //Ready vil si at init er ferdig.
        //HUSK: Skal du endre queryCriteria må du sette initFinished=false
        //igjen, og deretter true etter at den er ferdig.
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
        default:
            return state
    }
}
