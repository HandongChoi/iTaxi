  // Initialize Firebase
  // TODO: Replace with your project's customized code snippet

    var config = {
      apiKey: "AIzaSyCdEGrIp-vZipTaVj-ftFGPYJ7nWGZ3m1Y",
      authDomain: "itaxi-6fe12.firebaseapp.com",
      databaseURL: "https://itaxi-6fe12.firebaseio.com",
      projectId: "itaxi-6fe12",
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