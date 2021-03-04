import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCbNLiu9RwK3msDKV_J4ev416ktl8YjkD0",
  authDomain: "localshopauth.firebaseapp.com",
  databaseURL: "https://localshopauth-default-rtdb.firebaseio.com/",
  projectId: "localshopauth",
  storageBucket: "localshopauth.appspot.com",
  messagingSenderId: 553688794143
});

export const auth = app.auth();
export default app;