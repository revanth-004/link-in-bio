// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwK8R4A-xP2YKsFoMrPN6Wwzv5orVwFmc",
  authDomain: "views-counter-4c0b7.firebaseapp.com",
  projectId: "views-counter-4c0b7",
  storageBucket: "views-counter-4c0b7.firebasestorage.app",
  messagingSenderId: "1028740236372",
  appId: "1:1028740236372:web:5d1024e4f5392427b359c1",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
