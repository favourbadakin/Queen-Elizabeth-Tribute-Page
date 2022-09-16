import firebase from 'firebase';

let firebaseApp = firebase.initializeApp({
    authDomain: process.env.REACT_APP_DOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGE,
    messagingSenderId: process.env.REACT_APP_SENDERID,
    appId: process.env.REACT_APP_APPID
});

let db = firebaseApp.firestore();
export { db }
