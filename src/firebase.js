// Firebase.js
import firebase from 'firebase/app';
import 'firebase/database';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBS7-l3QGrrjNOjeBveNuOw43EPLCs64h0",
    authDomain: "projectfive-58123.firebaseapp.com",
    databaseURL: "https://projectfive-58123.firebaseio.com",
    projectId: "projectfive-58123",
    storageBucket: "projectfive-58123.appspot.com",
    messagingSenderId: "685748994816",
    appId: "1:685748994816:web:a5fe6a534909f0bb2069e5",
    measurementId: "G-BHWNHQ6PJN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export configured version of firebase
export default firebase;