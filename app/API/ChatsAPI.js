import {ref} from "../Config/Constants"

export function registerNewChat(chatID, time){
    pushItem = ref.child("users/" + uid + "/userChats").push({
        createdAt: time
    })
    return pushItem.key
}

export function getUserChatIDs(uid){
    return ref.child("users/" + uid + "/userChats").once("value")
}

export function getChatInformation(chatID){
    return ref.child("chats/" + chatID).once("value")
}

export function updateLastMessageForChat(chatID, message){
    return ref.child("chats/" + chatID).update({
        lastMessage: message
    })
}

export function registerMembersForChat(chatID, members, photos){
  return ref.child("chatMembers/" + chatID).update({
    fmember: members[0],
	fmemberPhoto: photos[0],
    lmember: members[1],
	lmemberPhoto: photos[1],
  })
}

export function getMembersForChat(chatID){
    return ref.child("chatMembers/" + chatID).once("value")
}

export function addMessageToChat(chatID, message, name, createdAt){
    return ref.child("chatMessages/" + chatID).push({
        name: name,
        message: message,
        createdAt: createdAt,
    })
}
