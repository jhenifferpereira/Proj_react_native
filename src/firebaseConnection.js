{/*import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

let firebaseConfig = {
    apiKey: "AIzaSyDek1Tu2rvnWdzasoZcdnNjb7AjhIXfeTA",
    authDomain: "bdcrud-f83e9.firebaseapp.com",
    databaseURL: "https://bdcrud-f83e9-default-rtdb.firebaseio.com",
    projectId: "bdcrud-f83e9",
    storageBucket: "bdcrud-f83e9.appspot.com",
    messagingSenderId: "711850427763",
    appId: "1:711850427763:web:0ecd27e4ff4bd55e807106"
  };
  
  if (!firebase.apps.length) {
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
  }

  export default firebase;

*/ }

  // Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//import firebase from 'firebase/compat/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvnLLPgWPWrN_6K_x8BiIoK8wpgy3tAME",
  authDomain: "crudreact-329dc.firebaseapp.com",
  databaseURL: "https://crudreact-329dc-default-rtdb.firebaseio.com/",
  projectId: "crudreact-329dc",
  storageBucket: "crudreact-329dc.appspot.com",
  messagingSenderId: "649112605850",
  appId: "1:649112605850:web:84311a6f6daf4a0394bb23"

  
};

// Initialize Firebase
if (!firebase.apps.length) {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
}

export default firebase;