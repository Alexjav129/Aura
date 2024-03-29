import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Add this line

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE_CONFIG,
  authDomain: "marolio-forever-b2574.firebaseapp.com",
  projectId: "marolio-forever-b2574",
  storageBucket: "marolio-forever-b2574.appspot.com",
  messagingSenderId: "19098434442",
  appId: "1:19098434442:web:ff8372f72db1d8f7eae673",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // Add this line
