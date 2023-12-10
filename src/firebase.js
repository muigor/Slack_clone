import firebase from 'firebase/compat/app'; // Importation du package principal de Firebase
import 'firebase/compat/firestore'; // Importation du service Firestore
import 'firebase/compat/auth'; // Importation du service d'authentification



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAZ5uLu4m2qxSwDs_0bzUtwcLRE2RfLOtc",
    authDomain: "slack-clone-23569.firebaseapp.com",
    projectId: "slack-clone-23569",
    storageBucket: "slack-clone-23569.appspot.com",
    messagingSenderId: "997169760575",
    appId: "1:997169760575:web:7a8ab54009facbaf716b8a",
    measurementId: "G-P0FQ8J8D30"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db =firebaseApp.firestore();

const auth =firebase.auth(firebaseApp);

const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};

export default db ;