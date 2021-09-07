// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAl2yDMzWzyO0q5XpvPdiBwx27RpBQink",
  authDomain: "netflix-clone-da28d.firebaseapp.com",
  projectId: "netflix-clone-da28d",
  storageBucket: "netflix-clone-da28d.appspot.com",
  messagingSenderId: "968834555866",
  appId: "1:968834555866:web:0c6e7087a43647b2d3eae3",
  measurementId: "G-NSMHPPH0D1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;
