import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyDOpridiSEOjHSPMENX9QhBIFOqVxUZcI8",
  authDomain: "take-home-d7383.firebaseapp.com",
  projectId: "take-home-d7383",
  storageBucket: "take-home-d7383.appspot.com",
  messagingSenderId: "122840706470",
  appId: "1:122840706470:web:36bb3e391317f63efe3367",
  measurementId: "G-8PTHG0Q2NN",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
