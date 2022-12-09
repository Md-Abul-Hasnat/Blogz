import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2aqau1kP6n3M9oLyc7O2TUCD0dkFqF0M",
  authDomain: "blogz-9530b.firebaseapp.com",
  projectId: "blogz-9530b",
  storageBucket: "blogz-9530b.appspot.com",
  messagingSenderId: "1023445072338",
  appId: "1:1023445072338:web:77c382f666cae948bc300b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
