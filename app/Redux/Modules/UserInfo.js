const UPDATE_USER = "UPDATE_USER"
const UPDATE_FBFRIENDS = "UPDATE_FBFRIENDS"
const UPDATE_UID = "UPDATE_UID"


export function updateUser(user){
    console.log(user)
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

export function updateUid(uid){
    return {
        type: UPDATE_UID,
        uid,
    }
}



const initialState = {
    uid: "",
    photoURL: "",
    displayName: "",
    fbFriends: [],
}

export function UserInfo(state = initialState, action){
    switch(action.type){
        case UPDATE_USER:
        return {
            ...state,
            uid: action.user.uid,
            photoURL: action.user.photoURL,
            displayName: action.user.displayName,
        }
        case UPDATE_FBFRIENDS:
        return{
            ...state,
            fbFriends: action.friends
        }
        case UPDATE_UID:
        return {
            ...state,
            uid: action.uid
        }
        default:
        return {
            state
        }
    }
}
