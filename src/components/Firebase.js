import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: "blogz-9530b.firebaseapp.com",
  projectId: "blogz-9530b",
  storageBucket: "blogz-9530b.appspot.com",
  messagingSenderId: `${process.env.REACT_APP_MESSAGINGSENDER_ID}`,
  appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
