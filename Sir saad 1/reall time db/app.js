import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getDatabase, ref, set, onValue, child, push, update } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBB_pnVEIx-JEEjyT1BtyOkgrZwbHTnFbQ",
    authDomain: "to-do-list-bc0e8.firebaseapp.com",
    databaseURL: "https://to-do-list-bc0e8-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "to-do-list-bc0e8",
    storageBucket: "to-do-list-bc0e8.appspot.com",
    messagingSenderId: "930259911721",
    appId: "1:930259911721:web:d484f55dddae6761bfc838",
    measurementId: "G-4HXT71SVZF"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function writeUserData(userId, name, email) {
    set(ref(db, 'users/' + userId), {
        username: name,
        email: email,
    })
}

writeUserData("03", "Taha ansari", "tahaansari6408@gmail.com");
// writeUserData("02", "Taha", "iamtahaansari293@gmail.com");

const starCountRef = ref(db, 'users/02/');
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});

// function writeNewPost(uid, username, picture, title) {
  
//     // A post entry.
//     const postData = {
//       author: username,
//       uid: uid,
//       title: title,
//       starCount: 0,
//       authorPic: picture
//     };
    
//     // Get a key for a new Post.
//     const newPostKey = push(child(ref(db), 'posts')).key;
    
//     // Write the new post's data simultaneously in the posts list and the user's post list.
//     const updates = {};
//     updates['/posts/' + newPostKey] = postData;
//     updates['/user-posts/' + "05" + '/' + newPostKey] = postData;
    
//     console.log(postData);
//     return update(ref(db), updates);
    
// }
// writeNewPost("01","Tahaansari","./todo logo","new")