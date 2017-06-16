import React from "react"
import {Alert} from "react-native"
import {Constants, Location, Permissions} from 'expo';

const geoCoderKey = "AIzaSyAsNWw_JXk_L9Xj2gXTq4T47-nibcofra8"

export async function getLocation() {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
        Alert.alert("Permission denied")
    }
    else {
        const response = await Location.getCurrentPositionAsync({})
        coordinates = [response.coords.latitude, response.coords.longitude]
        location = await reverseGeoCodeCoordinates(coordinates)
        locFormat = await location.json()
        address = locFormat.address
        console.log(locFormat)
        city = ""
        if("state" in address){
            city = address.state
        }
        else if("city" in address){
            city = address.city
        }
        country = address.country

        location = {
            city: city,
            country: country,
        }
        return location
    }
}

async function reverseGeoCodeCoordinates(c) {
    //Getting location from google servers
    url = "http://nominatim.openstreetmap.org/reverse?format=json&lat="+c[0]+"&lon="+c[1]+"&zoom=7&addressdetails=1"
    //url = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+c[0]+","+c[1]+"&key=" + geoCoderKey
    return await fetch(url)
}
