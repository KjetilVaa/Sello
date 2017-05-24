const UPDATE_USER = "UPDATE_USER"
const UPDATE_FBFRIENDS = "UPDATE_FBFRIENDS"


export function updateUser(user){
    return {
        type: UPDATE_USER,
        user,
    }
}

export function updateFBFriends(friends){
    return {
        type: UPDATE_FBFRIENDS,
        friends,
    }
}



const initialState = {
    photoURL: "",
    displayName: "",
    fbFriends: [],
}

export function UserInfo(state = initialState, action){
    switch(action.type){
        case UPDATE_USER:
        return {
            photoURL: action.user.photoURL,
            displayName: action.user.displayName,
            fbFriends: action.user.fbFriends,
        }
        case UPDATE_FBFRIENDS:
        return{
            ...state,
            fbFriends: action.friends
        }
        default:
        return {
            state
        }
    }
}
