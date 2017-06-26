const SET_LOCATION = "SET_LOCATION"
const SET_RADIUS = "SET_RADIUS"

export function setLocation(loc){
    return {
        type: SET_LOCATION,
        loc,
    }
}

export function setRadius(radius){
    return {
        type: SET_RADIUS,
        radius,
    }
}

const initialState = {
    city: "",
    country: "",
    lat: "",
    long: "",
    radius: "30",
}

export function Location(state=initialState, action){
    switch (action.type) {
        case SET_LOCATION:
        return {
            ...state,
            city: action.loc.city,
            country: action.loc.country,
            lat: action.loc.lat,
            long:action.loc.long,
        }
        case SET_RADIUS:
        return {
            ...state,
            radius: action.radius
        }
        default:
        return state
    }
}
