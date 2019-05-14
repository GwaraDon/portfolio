import firebase from 'firebase'
import firestore from 'firebase/firestore'


const config = {
  apiKey: "AIzaSyBeOY17llMjxf2C7-xckgbc0PU5M9Cpq5U",
  authDomain: "portfolio-b4b1f.firebaseapp.com",
  databaseURL: "https://portfolio-b4b1f.firebaseio.com",
  projectId: "portfolio-b4b1f",
  storageBucket: "portfolio-b4b1f.appspot.com",
  messagingSenderId: "866023558700",
  appId: "1:866023558700:web:15f08e13ab647998"
};
firebase.initializeApp(config);

// const firestore = firebase.firestore();
firestore.settings({
  timestampsInSnapshots: true
});