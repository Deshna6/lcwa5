// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBqU_fXZjmVKx8p8Qs8OsR6Pl-kI3gu-4I",
    authDomain: "kwitter-bb6f6.firebaseapp.com",
    databaseURL: "https://kwitter-bb6f6-default-rtdb.firebaseio.com",
    projectId: "kwitter-bb6f6",
    storageBucket: "kwitter-bb6f6.appspot.com",
    messagingSenderId: "790383386570",
    appId: "1:790383386570:web:11e48343aa2bcdd3493933"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome"+ user_name+"!";


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
   
}



