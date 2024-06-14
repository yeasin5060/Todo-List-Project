// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFbJzG7ro7ns8QWMzlkCmk3btvIyPxub0",
  authDomain: "todo-list-4899c.firebaseapp.com",
  projectId: "todo-list-4899c",
  storageBucket: "todo-list-4899c.appspot.com",
  messagingSenderId: "431581546046",
  appId: "1:431581546046:web:3cba4e3b511c9f5b63b36f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig