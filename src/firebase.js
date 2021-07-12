import firebase from "firebase";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCfaIp2baOb1VJO3Ndz_leZja-HQFws0Mk",
  authDomain: "animexd-8e728.firebaseapp.com",
  projectId: "animexd-8e728",
  storageBucket: "animexd-8e728.appspot.com",
  messagingSenderId: "331908780180",
  appId: "1:331908780180:web:0f889aa634aaa2e0dfa481",
  measurementId: "G-PCRB6Z7Q4N",
});

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
