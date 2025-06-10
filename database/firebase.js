import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB_OPu7mFEj0fICBExppRkRUuMEaZu58-4",
    authDomain: "react-clasificador-reciclaje.firebaseapp.com",
    projectId: "react-clasificador-reciclaje",
    storageBucket: "react-clasificador-reciclaje.firebasestorage.app",
    messagingSenderId: "1086048613022",
    appId: "1:1086048613022:web:9d94d23836ebe86911418f"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };