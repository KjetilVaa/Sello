import firebase from "firebase"

firebase.initializeApp({
  apiKey: "AIzaSyDyvgbk7jlh6zUeTC7Qrz7tiwB15l-ruDk",
  authDomain: "sello-1f9ec.firebaseapp.com",
  databaseURL: "https://sello-1f9ec.firebaseio.com",
  projectId: "sello-1f9ec",
  storageBucket: "sello-1f9ec.appspot.com",
  messagingSenderId: "1014305452466"
});

const ref = firebase.database().ref()
const firebaseAuth = firebase.auth()
const facebookProvider = firebase.auth.FacebookAuthProvider
const appId = "1244206969002228"

export {
    ref,
    firebaseAuth,
    facebookProvider,
    appId,
}
