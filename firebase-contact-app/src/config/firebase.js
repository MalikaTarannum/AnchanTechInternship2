// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdcsO-FKEC8qDFowtAbLeoEW3WPr5mN4o",
  authDomain: "vite-contact-e871c.firebaseapp.com",
  projectId: "vite-contact-e871c",
  storageBucket: "vite-contact-e871c.appspot.com",
  messagingSenderId: "146751190530",
  appId: "1:146751190530:web:c36d7c1aa94db05ec2191b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);