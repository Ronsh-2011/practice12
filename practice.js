
var firebaseConfig = {
    apiKey: "AIzaSyBEP1T8H0xYSCCjDJEtV2lsdQiIUrYJR-E",
    authDomain: "donut-73c44.firebaseapp.com",
    databaseURL: "https://donut-73c44-default-rtdb.firebaseio.com",
    projectId: "donut-73c44",
    storageBucket: "donut-73c44.appspot.com",
    messagingSenderId: "1035750636141",
    appId: "1:1035750636141:web:9f1c20da6a79f6eafd5d64",
    measurementId: "G-YJQ2RZVW2G"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
function adduser() {
username = document.getElementById("input").value;
firebase.database().ref("/").child(username).update({
    purpose:"addinguser"
});
}