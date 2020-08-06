import * as firebase from 'firebase/app'
//import firebase from "firebase"
import "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBWsIHDn_NQbgjYoJRhzZ-YRcVLsDfxmNs",
    authDomain: "todoapp-1998.firebaseapp.com",
    databaseURL: "https://todoapp-1998.firebaseio.com",
    projectId: "todoapp-1998",
    storageBucket: "todoapp-1998.appspot.com",
    messagingSenderId: "1063029313116",
    appId: "1:1063029313116:web:f12f47b1f386d87626e099"
}

class Fire {
    init(){
        if (!firebase.apps.length){
            firebase.initializeApp(firebaseConfig)
        }

        firebase.auth().onAuthStateChanged(user => {
            if (user) {

            }
            else {
                firebase
                    .auth()
                    .signInAnonymously()
                    .catch(error => {});  
            }
        });
    }
}

export default Fire;