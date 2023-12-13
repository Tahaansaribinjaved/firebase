import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getStorage, ref, uploadBytes, getDownloadURL, uploadBytesResumable ,deleteObject } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);


let btn = document.querySelector('#btn')
let getFile = document.querySelector('#getFile')
btn.addEventListener('click', () => {
    const mountainsRef = ref(storage, `images/${getFile.files[0].name}`);
    const uploadTask = uploadBytesResumable(mountainsRef, getFile.files[0]);
    uploadTask.on('state_changed',
        (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
            }
        },
        (error) => {
            // Handle unsuccessful uploads
            console.log(error);
        },
        () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
            });
        }
    );


    // uploadBytes(mountainsRef,getFile.files[0]).then((snapshot) => {
    //     console.log('Uploaded a blob or file!',snapshot);
    //   });
    // console.log(getFile.files[0].name);
})
let dbtn = document.querySelector('#dbtn')
dbtn.addEventListener('click',()=>{
    // Create a reference to the file to delete
const desertRef = ref(storage,`images/${getFile.files[0]}`);

// Delete the file
deleteObject(desertRef).then(() => {
  // File deleted successfully
}).catch((error) => {
  // Uh-oh, an error occurred!
});

})


