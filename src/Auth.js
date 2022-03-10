import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBGPsfUWjd-Lm_2YYB021F9GFe645mRM0",
  authDomain: "jobify-fk.firebaseapp.com",
  projectId: "jobify-fk",
  storageBucket: "jobify-fk.appspot.com",
  messagingSenderId: "56042238888",
  appId: "1:56042238888:web:c879ad1a2a8f436e68e39d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);