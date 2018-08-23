  // Initialize Firebase
  // TODO: Replace with your project's customized code snippet

    var config = {
      apiKey: "AIzaSyAUzjyDEOkbfvh3hU_t4wR4p3jXNq5lz3A",
      authDomain: "itaxipublic.firebaseapp.com",
      databaseURL: "https://itaxipublic.firebaseio.com",
      projectId: "itaxipublic",
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