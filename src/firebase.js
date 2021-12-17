import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByjZIyNA0b6KGeavLvLPl_OFbT9PX8BYo",
  authDomain: "fir-659b0.firebaseapp.com",
  databaseURL: "https://fir-659b0-default-rtdb.firebaseio.com",
  projectId: "fir-659b0",
  storageBucket: "fir-659b0.appspot.com",
  messagingSenderId: "762156124491",
  appId: "1:762156124491:web:254161871be7b3da5ec0ce",
  measurementId: "G-HKMB4VQX17"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
  
