const SET_LOCATION = "SET_LOCATION"

export function setLocation(loc){
    return {
        type: SET_LOCATION,
        loc,
    }
}

const initialState = {
    city: "",
    country: "",
}

export function Location(state=initialState, action){
    switch (action.type) {
        case SET_LOCATION:
        return {
            city: action.loc.city,
            country: action.loc.country,
        }
        default:
        return state
    }
}
