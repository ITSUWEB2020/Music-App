import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDQntnGUeREwpNtnB5vLQ7uT_oAPq9SCPQ",
    authDomain: "music-app-161ed.firebaseapp.com",
    projectId: "music-app-161ed",
    storageBucket: "music-app-161ed.appspot.com",
    messagingSenderId: "223409392222",
    appId: "1:223409392222:web:094debff34d6790dd802cf",
    measurementId: "G-Z1GL9205FH"
  };

  firebase.initializeApp(firebaseConfig)

  const projectAuth = firebase.auth()

  const projectFirestore = firebase.firestore()

  const projectStorage = firebase.storage()

  const timestamp = firebase.firestore.FieldValue.serverTimestamp



  export {
    projectFirestore,
    projectAuth,
    timestamp,
    projectStorage
}