import { firebaseAuth, facebookProvider, ref, appId } from '../Config/Constants';
import Expo from "expo"
import {Alert} from "react-native"


function authWithToken(token){
    return firebaseAuth.
    signInWithCredential(facebookProvider.credential(token))
}

export function logout(){
    firebaseAuth.logout()
    ref.off()
}

export async function logIn(){
    const { type, token } = await Expo.Facebook.
    logInWithReadPermissionsAsync(appId, {
    permissions: ['public_profile', 'user_friends'],
    });
    if (type === 'success') {
        // Get the user's info using Facebook's Graph API
        const response = await fetch("https://graph.facebook.com/me?fields=name,friends,picture&access_token=" + token)
        let userData = await response.json()
        //Logging in with firebase
        await authWithToken(token)
        return userData
    }
}
