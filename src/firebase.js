import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'

const firebaseConfig = { 
    apiKey : "AIzaSyBw_8FnXlxVWwK9SwPIBSblmS7IGmmg7O0" , 
    authDomain : "react-login-otp.firebaseapp.com", 
    projectId : "react-login-otp", 
    storageBucket : "react-login-otp.appspot.com", 
    messagingSenderId : "925482459238", 
    appId : "1:925482459238:web:bdec5b35429214eb5dcda7" 
};

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export {auth , firebase};