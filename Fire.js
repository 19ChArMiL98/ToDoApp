import * as firebase from 'firebase/app'
//import firebase from "firebase"
import "@firebase/firestore"
import { useCallback } from 'react';

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
    init(callback){
        if (!firebase.apps.length){
            firebase.initializeApp(firebaseConfig)
        }

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                useCallback(null, user)
            }
            else {
                firebase
                    .auth()
                    .signInAnonymously()
                    .catch(error => {
                        useCallback(error);
                    });  
            }
        });
    }

    getLists(callback) {
       let ref = firebase
        .firestore()
        .collection("users")
        .doc(this.userId)
        .collection("lists");

        this.unsubscribe = ref.onSnapshot(snapshot => {
            lists = []
            snapshot.forEach(doc => {
                lists.push({id: doc.id, ...doc.data()})
            });

            callback(lists);
        });
   }

   get userId(){
       return firebase.auth().currentUser.uid;
   }

   /*detach() {
       this.unsubscribe();
    }*/

}

export default Fire;