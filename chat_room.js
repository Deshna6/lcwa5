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
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome "+ user_name+"!";

  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"       
    });
    localStorage.setItem("room_name", room_name);
    window.location = "chat_page.html";
  }
function getData() {
  firebase.database().ref("/").on('value', 
    function(snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(
        function(childSnapshot) {
          childKey  = childSnapshot.key;
          Room_names = childKey;
          console.log("Room Name - " +Room_names);
          row = "<div class = 'room_name' id="+Room_names +" onclick='redirectToRoomName(this.id)' >#"
                                              + Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
    });
}
getData();
function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "chat_page.html";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}