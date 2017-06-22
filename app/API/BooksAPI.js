import {ref, geoFire} from "../Config/Constants"

//May have some perfomance issues with many many users...
//Posting a book with geoFire
export async function addBook(obj, country, coordinates){
    key = obj.uid+"*"+obj.displayName+"*"+obj.title+"*"+obj.year+"*"+obj.author+"*"+obj.price+"*"+obj.used
    console.log(country)
    console.log(coordinates)
    console.log(key)
    return  await geoFire.set(key, coordinates)
}
