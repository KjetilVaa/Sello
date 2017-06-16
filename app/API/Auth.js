import { firebaseAuth, facebookProvider, ref, appId } from '../Config/Constants';
import Expo from "expo"
import {Alert} from "react-native"


function authWithToken(token){
    return firebaseAuth.
    signInWithCredential(facebookProvider.credential(token))
}

export function logout(){
    firebaseAuth.signOut()
    ref.off()
}

export function updateUserInDatabase(uid, info){
    return ref.child("users/" + uid).update(info)
}

export async function logIn(){
    const { type, token } = await Expo.Facebook.
    logInWithReadPermissionsAsync(appId, {
    permissions: ['public_profile', 'user_friends'],
    });
    if (type === 'success') {
        //Logging in with firebase
        await authWithToken(token)

    }
    if (type === "cancel"){
        Alert.alert("Login cancelled")
    }
}
