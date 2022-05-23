import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAgr-gEKILfvZDYI53ZleUxq-6zFTSSuew",
  authDomain: "assignment-12-2022.firebaseapp.com",
  projectId: "assignment-12-2022",
  storageBucket: "assignment-12-2022.appspot.com",
  messagingSenderId: "635739812605",
  appId: "1:635739812605:web:be9ae02800ecbc208e4494",
  measurementId: "G-E9BGHW6G0E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
