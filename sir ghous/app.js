 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
 import { collection, addDoc,getFirestore, onSnapshot  } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js"; 

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
const db = getFirestore(app)



const getTodos = ()=>{

 onSnapshot(collection(db, "todos"), (data) => {
   data.docChanges().forEach((change) => {
    console.log(change.doc.data());
   })

    });
  
}   
getTodos()      


const  addTodo =async () =>{
    try{

        let todo = document.querySelector('#todo');
        let list = document.querySelector('#list');
        let date = new Date();
        const docRef = await addDoc(collection(db, "todos"), {
            value: todo.value,
            time: date.toLocaleString()
        });
        console.log("Document written with ID: ", docRef.id);
        
        // list.innerHTML += `
        //     <li>
        //         <input class='todo-input' type='text' value='${todo.value}' disabled>
        //         ${date.toLocaleString()}
        //         <button onclick="delTodo(this)">Del todo</button>
        //         <button onclick="editTodo(this)">Edit todo</button>
        //     </li>`;
        todo.value = ''; // Clear the input field after adding a todo
    }catch(err){
        console.log(err);
    }
    }
    
function delTodo(element) {
    element.parentNode.remove();
}

var edit = false;

function editTodo(element) {
    if (edit) {
        element.parentNode.childNodes[1].disabled = true;
        element.parentNode.childNodes[5].innerHTML = "Edit todo";
        edit = false;
        console.log('true');
    } else {
        element.parentNode.childNodes[1].disabled = false;
        element.parentNode.childNodes[1].focus();
        element.parentNode.childNodes[4].innerHTML = "Update todo";
        console.log('false');
        edit = true;
    }
}

function deleteAll() {
    let list = document.querySelector('#list');
    list.innerHTML = "";
}
window.addTodo = addTodo;
window.deleteAll = deleteAll;
window. editTodo =  editTodo;
window.delTodo = delTodo;