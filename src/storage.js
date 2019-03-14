import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/storage'


firebase.initializeApp(
    {
        apiKey: "AIzaSyCpIn0bLbVr_BBigCtjECXL3TScBFN3cvc",
        authDomain: "auto-chess-db-0728.firebaseapp.com",
        databaseURL: "https://auto-chess-db-0728.firebaseio.com",
    }
)
const storage = firebase.storage().ref()
export default storage