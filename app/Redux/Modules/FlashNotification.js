const SHOW_FLASH_NOTIFICATION = "SHOW_FLASH_NOTIFICATION"
const HIDE_FLASH_NOTIFICATION = "HIDE_FLASH_NOTIFICATION"

export function showFlashNotification({text, permanent=false, location="top"}){
    return {
        type: SHOW_FLASH_NOTIFICATION,
        text,
        permanent,
        location
    }
}

export function hideFlashNotification(){
    return {
        type: HIDE_FLASH_NOTIFICATION,
    }
}


const initialState = {
    showFlashNotification: false,
    text: "",
    permanent: false,
    location: "top"
}

export function FlashNotification(state = initialState, action){
    switch (action) {
        case SHOW_FLASH_NOTIFICATION:
        return {
            showFlashNotification: true,
            text: action.text,
            permanent: action.permanent,
            location: action.location
        }
        case HIDE_FLASH_NOTIFICATION:
        return {
            ...state,
            showFlashNotification: false
        }
        default:
            return state
    }
}
