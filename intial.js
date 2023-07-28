const firebaseConfig = {
    apiKey: "AIzaSyDOQ5EkbUhvo8kDJ4qN1zTpHks2jkWgau0",
    authDomain: "charity-website-90916.firebaseapp.com",
    projectId: "charity-website-90916",
    storageBucket: "charity-website-90916.appspot.com",
    messagingSenderId: "444445801876",
    appId: "1:444445801876:web:925f8eecb07a6f476ae381",
    measurementId: "G-9KXSMB9WK3"
  };
  firebase.initializeApp(firebaseConfig);
  const auth=firebase.auth();

  function signup(){
    console.log("inside signup");
    var email=document.getElementById("email");
    var password=document.getElementById("password");
    const promise=auth.createUserWithEmailAndPassword(email.value , password.value);
    promise.catch(e =>alert(e.message));
    alert("thubs up");
  }

  function signin()
  {
    var email=document.getElementById("email");
    var password=document.getElementById("password");
    const promise=auth.signInWithEmailAndPassword(email.value , password.value);
    promise.catch(e=>alert(e.message));
    alert("Logged Sucessfull");
    window.location.replace("home.html");

  }

  function signout()
  {
    auth.signout();
    alert("signed out");
    window.location.replace("auth_login.html");
  }
