var firebaseConfig = {
    apiKey: "AIzaSyCVNoMz2X0Rbqp7LoB5xcY4pY3M1wOJ9yM",
    authDomain: "kwitter-5b958.firebaseapp.com",
    databaseURL: "https://kwitter-5b958-default-rtdb.firebaseio.com",
    projectId: "kwitter-5b958",
    storageBucket: "kwitter-5b958.appspot.com",
    messagingSenderId: "274737604076",
    appId: "1:274737604076:web:4f90d7b5d665c2b7e54cc9"
  };
  firebase.initializeApp(firebaseConfig);
function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
}
