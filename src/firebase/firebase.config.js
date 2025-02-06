// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbnLkhg185MdnD-py2MFyeSMDl9WUHvzo",
  authDomain: "rai-support-ticket-system.firebaseapp.com",
  projectId: "rai-support-ticket-system",
  storageBucket: "rai-support-ticket-system.firebasestorage.app",
  messagingSenderId: "265859012135",
  appId: "1:265859012135:web:45f86e7ec5166cc444a002"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// export default auth;
export default app;