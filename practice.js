var firebaseConfig = {
    apiKey: "AIzaSyD1WI8tREWXbM-v6D1IdHrk3Blo55rMimI",
    authDomain: "kwitter-b13bb.firebaseapp.com",
    databaseURL: "https://kwitter-b13bb-default-rtdb.firebaseio.com",
    projectId: "kwitter-b13bb",
    storageBucket: "kwitter-b13bb.appspot.com",
    messagingSenderId: "676800723769",
    appId: "1:676800723769:web:1a429c0958e2cafe1b86e8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        Purpose:"adding user"
    });
}