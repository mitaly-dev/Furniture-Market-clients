// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuqblYlT9jagEwdxm7ziZWQHfoThCSEzA",
  authDomain: "furniture-market-f4a94.firebaseapp.com",
  projectId: "furniture-market-f4a94",
  storageBucket: "furniture-market-f4a94.appspot.com",
  messagingSenderId: "457766631261",
  appId: "1:457766631261:web:fecd337b663cf9f8659ab4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app