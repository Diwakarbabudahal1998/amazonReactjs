import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBp_Q_H83b9_eMmg6Bw-IscV5BH7LsPBHA",
    authDomain: "clone-fb6ce.firebaseapp.com",
    projectId: "clone-fb6ce",
    storageBucket: "clone-fb6ce.appspot.com",
    messagingSenderId: "983113548074",
    appId: "1:983113548074:web:30f5fc4ef1e37b8cda9e53",
    measurementId: "G-H87B5HYT8R"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };