import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth'

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCI9M711ROtYWFzQrwpPlKaKQ6WWMy-NpU",
    authDomain: "react-sprint-10632.firebaseapp.com",
    projectId: "react-sprint-10632",
    storageBucket: "react-sprint-10632.appspot.com",
    messagingSenderId: "461584542622",
    appId: "1:461584542622:web:139efa20dbe210b51b048f"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);





const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)