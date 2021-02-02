import firebase from "firebase/app";
import "firebase/auth";


const app = firebase.initializeApp({
  apiKey: "AIzaSyARtmSYIJ2-YhWQ0M9Ebf7wIG42S2AqmCg",
  authDomain: "get-lead.firebaseapp.com",
  projectId: "get-lead",
  storageBucket: "get-lead.appspot.com",
  messagingSenderId: "985024640545",
  appId: "1:985024640545:web:b2a3f3f9b2e31542fd9560"
})

export const auth = app.auth()
export default app