import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';



const app = firebase.initializeApp({

  apiKey: "AIzaSyDBjcgSc77rieLhauvWHdLrsoroceHY2-Y",

  authDomain: "video-app-978e4.firebaseapp.com",

  projectId: "video-app-978e4",

  storageBucket: "video-app-978e4.appspot.com",

  messagingSenderId: "771925786177",

  appId: "1:771925786177:web:85dab66181acddace3d0c0"

});


export const auth = app.auth();
export default app;