import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBXs1D-GxVJEcF9RyWY6DjhXmixZOGwE0Y",
  authDomain: "facebook-clone-c7e2d.firebaseapp.com",
  databaseURL: "https://facebook-clone-c7e2d.firebaseio.com",
  projectId: "facebook-clone-c7e2d",
  storageBucket: "facebook-clone-c7e2d.appspot.com",
  messagingSenderId: "531443979310",
  appId: "1:531443979310:web:f21493e605ed71fea1fbbf",
  measurementId: "G-X5V8XQFXXJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
