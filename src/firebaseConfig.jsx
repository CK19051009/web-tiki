import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCMox69dJULGownf4OjbULXsDOLoZYk3SQ",
  authDomain: "tiki-web-a799f.firebaseapp.com",
  databaseURL: "https://tiki-web-a799f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tiki-web-a799f",
  storageBucket: "tiki-web-a799f.appspot.com",
  messagingSenderId: "115011207974",
  appId: "1:115011207974:web:03e964f4ecd524640eb7e7"
};
const app = initializeApp(firebaseConfig);

const dataFirebase = getDatabase(app)

export{dataFirebase}