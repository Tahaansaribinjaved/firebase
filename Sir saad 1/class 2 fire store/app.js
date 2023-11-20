import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";


import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyDOszdEc64TvZ3E_0DkqQLyykGC0KEAHaw",
//   authDomain: "signup-login-16aa7.firebaseapp.com",
//   projectId: "signup-login-16aa7",
//   storageBucket: "signup-login-16aa7.appspot.com",
//   messagingSenderId: "87290304115",
//   appId: "1:87290304115:web:963f44f9a599f8335d7c06",
//   measurementId: "G-5GN067QSQN"
// };
const firebaseConfig = {
    apiKey: "AIzaSyD0EPKQGGRB2CQYR53B_YGYql0YIRtftS0",
    authDomain: "todoapp-2130e.firebaseapp.com",
    projectId: "todoapp-2130e",
    storageBucket: "todoapp-2130e.appspot.com",
    messagingSenderId: "324539848438",
    appId: "1:324539848438:web:91ae4d2ec3d6d6233f3ed7",
    measurementId: "G-D5J3KFYFC3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app);















// Signed up 

// ... (Your imports)


function signUp() {
    let email = document.querySelector('#suemail');
    let password = document.querySelector('#supassword');

    createUserWithEmailAndPassword(auth, email.value, password)
        .then(async (userCredential) => {
            const user = userCredential.user;
            console.log(user);
            alert('Registered successfully');
            location.href = './login.html';

            try {
                const docRef = await addDoc(collection(db, "users"), {
                    first: email,
                    last: password
                });
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
            alert(errorMessage);
        });
}

function signIn() {
    let email = document.querySelector('#siemail').value;
    let password = document.querySelector('#sipassword').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            location.href = './todo.html';
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
            alert(errorMessage);
        });
}

let btn = document.querySelector('#subtn');
if (btn) {
    btn.addEventListener('click', signUp);
}

let btn1 = document.querySelector('#sibtn');
if (btn1) {
    btn1.addEventListener('click', signIn);
}
