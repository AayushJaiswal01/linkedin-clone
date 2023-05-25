import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDSfCAa6AJoPcAyJmHhG95jBs8qkFUdj90",
    authDomain: "linkedin-clone-cbbf5.firebaseapp.com",
    projectId: "linkedin-clone-cbbf5",
    storageBucket: "linkedin-clone-cbbf5.appspot.com",
    messagingSenderId: "315961098719",
    appId: "1:315961098719:web:a8fac936285530b9f9446a",
    measurementId: "G-5NHQ08WS5Q"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();


  export {db ,auth};