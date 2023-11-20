// import {auth}        from           './config.js'


import {  createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
let email = document.querySelector('#semail')
let password = document.querySelector('#spass')
let btn = document.querySelector('#Signup')
btn.addEventListener('click',()=>{

    createUserWithEmailAndPassword(auth, email.value, password.value)
    
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.email)
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        // ..
    });
})