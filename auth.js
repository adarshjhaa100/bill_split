( function(){

//Initialise firebase
var config = {
    apiKey: "AIzaSyDedfteAgg9JjA2SptC7m3vhakc0T6EUy8",
    authDomain: "tripsplit-2ec57.firebaseapp.com",
    databaseURL: "https://tripsplit-2ec57.firebaseio.com",
    projectId: "tripsplit-2ec57",
    storageBucket: "tripsplit-2ec57.appspot.com",
    messagingSenderId: "135804051689"
  };
  firebase.initializeApp(config);

const txtEmail=document.getElementById('txtEmail');
const txtPassword=document.getElementById('txtPassword');
const btnLogin=document.getElementById('btnLogin');
const btnSignUp=document.getElementById('btnSignUp');
const btnLogout=document.getElementById('btnLogout');

btnLogin.addEventListener('click',e=>{
  //get email and password
  const email=txtEmail.value;
  const pass=txtPassword.value;
  const auth=firebase.auth;

  //Signin
  const promise=constauth.signInWithEmailAndPassword(email,pass);
});
promise.catch(e=>console.log(e.message));


}()
);
