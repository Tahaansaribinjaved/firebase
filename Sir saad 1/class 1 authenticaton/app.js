import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

import {  createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

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

// Signed up 



let btn = document.querySelector('#subtn')
if(btn){
btn.addEventListener('click',()=>{

    
    
    let email =  document.querySelector('#suemail').value
    let password =  document.querySelector('#supassword').value
    createUserWithEmailAndPassword(auth, email, password)
    
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      alert('register ')
      location.href = './login.html'
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // ..
    });
    
    
  })
}

let btn1 =  document.querySelector('#sibtn')
if(btn1){

  btn1.addEventListener('click',()=>{
    
    
    
    let email =  document.querySelector('#siemail').value
    let password =  document.querySelector('#sipassword').value
    
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      // alert('wellcome');
      location.href = './todo.html' 
      // console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
  })
}
  