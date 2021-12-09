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

user_name = localStorage.getItem("user_name");

room_name = localStorage.getItem("room_name");

function send(){
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
});
document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
   firebase_message_id = childKey;
   message_data = childData;
//Start code

//End code
} });  }); }
getData();