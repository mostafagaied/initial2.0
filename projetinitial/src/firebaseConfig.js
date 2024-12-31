// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdfIWRpZtXCa7Dyvx6VCF5e7E09Ls4I6M",
  authDomain: "sin2-f4bd0.firebaseapp.com",
  projectId: "sin2-f4bd0",
  storageBucket: "sin2-f4bd0.firebasestorage.app",
  messagingSenderId: "16670856877",
  appId: "1:16670856877:web:a53b6b42bafb1097ef9824"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };