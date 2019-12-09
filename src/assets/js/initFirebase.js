export const initFirebase =()=>{

    // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAvrHl07zcDjZUkcnbr4fY7hJu9z9br2aQ",
    authDomain: "emprende-872ec.firebaseapp.com",
    databaseURL: "https://console.firebase.google.com/u/0/project/emprende-872ec/overview",
    projectId: "emprende-872ec",
    storageBucket: "emprende-872ec.appspot.com",
    messagingSenderId: "616782302696",
    appId: "1:616782302696:web:9d10be84ee6606e884285d",
    measurementId: "G-QYH7R6PCK8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


}