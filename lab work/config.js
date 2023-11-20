import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDOszdEc64TvZ3E_0DkqQLyykGC0KEAHaw",
    authDomain: "signup-login-16aa7.firebaseapp.com",
    projectId: "signup-login-16aa7",
    storageBucket: "signup-login-16aa7.appspot.com",
    messagingSenderId: "87290304115",
    appId: "1:87290304115:web:963f44f9a599f8335d7c06",
    measurementId: "G-5GN067QSQN"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);