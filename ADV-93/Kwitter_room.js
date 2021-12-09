// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB94HVvqETEY3MHxGFsYoCt6v3uq5JagJY",
  authDomain: "covid-19bot-ibri.firebaseapp.com",
  databaseURL: "https://covid-19bot-ibri-default-rtdb.firebaseio.com",
  projectId: "covid-19bot-ibri",
  storageBucket: "covid-19bot-ibri.appspot.com",
  messagingSenderId: "612373550612",
  appId: "1:612373550612:web:657e19ad9fef7930caf901",
  measurementId: "G-ZMWSDRT5SV"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
    

firebase.database().ref("/").child("room_name").update({
  purpose = "adding room"
})

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"

function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child("room_name").update ({
            purpose:"adding room name"
      });
            localStorage.setItem("room_name", room_name);
            window.location = "kwitter_room.html"
      
  }

  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
        Room_names = childKey;
        console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
     });
   });
 
 }
 
 getData();

function redirectToRoomName(name) 
{
console.log(name);
localStorage.setItem("room_name", name);
window.location("kwitter_page.html");
}

getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }

  function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html"
  }