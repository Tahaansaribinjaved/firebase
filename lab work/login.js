import { auth } from './config.js';
import { signInWithEmailAndPassword , updatePassword } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';

const form = document.querySelector('#form')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
// const forgotBtn = document.querySelector('#forgot')


form.addEventListener('submit', (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            window.location = 'home.html'
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
})