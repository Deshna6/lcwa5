var firebaseConfig = {
    apiKey: "AIzaSyBqU_fXZjmVKx8p8Qs8OsR6Pl-kI3gu-4I",
    authDomain: "kwitter-bb6f6.firebaseapp.com",
    databaseURL: "https://kwitter-bb6f6-default-rtdb.firebaseio.com",
    projectId: "kwitter-bb6f6",
    storageBucket: "kwitter-bb6f6.appspot.com",
    messagingSenderId: "790383386570",
    appId: "1:790383386570:web:11e48343aa2bcdd3493933"
  };
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  
  function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
     name:user_name,
     message : msg,
     like:0    
    });
    document.getElementById("msg").value="";



  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
msg_user_name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>" + msg_user_name +"</h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button="<button class='btn btn-warning' id="+ firebase_message_id+" value=" +like+" onclick='updateLike(this.id)'>Likes :" + like+"</button>";
row = name_with_tag+message_with_tag+like_button;
document.getElementById("output").innerHTML+= row;
//End code
    } });  }); }
getData();
function updateLike(message_id){
    console.log("clicked on like button -" + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes)+1;
    console.log(updated_likes);
    firebase.database().ref(room_name).child(message_id).update({
          like : updated_likes
    });
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name")
window.location.replace("index.html");
}

