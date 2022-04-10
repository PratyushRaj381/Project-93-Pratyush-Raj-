const firebaseConfig = {
    apiKey: "AIzaSyBSMlGoQZzw1pEdmImP8vZxXCnpmpGVlUc",
    authDomain: "project-93-a6695.firebaseapp.com",
    projectId: "project-93-a6695",
    storageBucket: "project-93-a6695.appspot.com",
    messagingSenderId: "457569509251",
    appId: "1:457569509251:web:a1966e86aa7c13f502a0b6",
    measurementId: "G-FLL43G79V8"
  };

  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome "=user_name+"!";
  function addRoom(){
        room_name=document.getElementById("room_name").value ;
        firebase.database().ref("/").child(room_name).update({
              purpose:"adding room name"
        });
        localStorage.setItem("room_name",room_name);
        window.location="kwitter_page.html";
  }
  function logout(){
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location="index.html";
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();