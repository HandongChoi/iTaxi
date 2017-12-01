  // Initialize Firebase
  // TODO: Replace with your project's customized code snippet

    var config = {
      apiKey: "AIzaSyANvht7J2MNX6x47mglqfJk74yZQ9u0qUk",
      authDomain: "itaxi-54bdc.firebaseapp.com",
      databaseURL: "https://itaxi-54bdc.firebaseio.com",
      projectId: "itaxi-54bdc",
      //storageBucket: "itaxi-6fe12.appspot.com",
      //messagingSenderId: "715994569718"
    };
    firebase.initializeApp(config);

    // firebase.auth().signInAnonymously().catch(function(error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   // ...
    // });

    // firebase.auth().onAuthStateChanged(function(user) {
    // if (user) {
    //   // User is signed in.
    //   var isAnonymous = user.isAnonymous;
    //   var uid = user.uid;

    //   // ...
    // } else {
    //   // User is signed out.
    //   // ...
    // }
    // ...
// });