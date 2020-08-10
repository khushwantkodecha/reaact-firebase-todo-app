import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyClUXCGb-Z0qitKrp1krUBRIXRVE8RD44M",
  authDomain: "react-todo-e73c0.firebaseapp.com",
  databaseURL: "https://react-todo-e73c0.firebaseio.com",
  projectId: "react-todo-e73c0",
  storageBucket: "react-todo-e73c0.appspot.com",
  messagingSenderId: "718184326791",
  appId: "1:718184326791:web:9fce93e491172146927a22",
  measurementId: "G-SDS87EC329",
});

const db = firebaseApp.firestore();

export default db;
