import firebase from "firebase";

    const firebaseApp=firebase.initializeApp({
        apiKey: "AIzaSyAzeOmwMXP5IJ0a-Wt_md7iE3y_Ya_Vsxg",
        authDomain: "fantasy-football-players.firebaseapp.com",
        databaseURL: "https://fantasy-football-players.firebaseio.com",
        projectId: "fantasy-football-players",
        storageBucket: "fantasy-football-players.appspot.com",
        messagingSenderId: "559936098932",
        appId: "1:559936098932:web:60ea67a0bee5275b813721"
    });
    
const db=firebaseApp.firestore();
const storage=firebase.storage();

  export {db, storage};