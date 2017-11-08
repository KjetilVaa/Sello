import {getUserChatIDs, getChatInformation} from "../../API/ChatsAPI"
import {ref} from "../../Config/Constants"

const UPDATE_USER_CHATS = "UPDATE_USER_CHATS"


export function updateUserChats(chats){
    return {
        type: UPDATE_USER_CHATS,
        chats,
    }
}

export function fetchUserChats(uid){
    return function(dispatch){
        getUserChatIDs(uid).then((snapshot) => {
            value = snapshot.val()
            if(value != null){
                for (var key in value){
                    dispatch(updateUserChats(
                        {
                            chatID: key,
                            createdAt: value[key].createdAt,
                            member: value[key].member
                        }
                    ))
                }
            }
        })
    }
}



//userChats contains objects with chatID, lastmessage and lastOpened
//Fetches on app startup
initialState = {
    userChats: []
}

export function UserChats(state = initialState, action){
    switch (action.type) {
        case UPDATE_USER_CHATS:
        return {
            userChats: [...state.userChats, action.chats]
        }
        default:
        return state
    }
}
