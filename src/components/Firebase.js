import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: "blogz-9530b.firebaseapp.com",
  projectId: `${process.env.REACT_APP_FIREBASE_PROJECTID}`,
  storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGEBUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_MESSAGINGSENDER_ID}`,
  appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
