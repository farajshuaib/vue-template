import type { FirebaseOptions } from "firebase/app";

const APP_NAME: string = "";

const API_BASE_URL: string = "http://localhost:5030/Api/Public/";  

const firebaseConfig: FirebaseOptions = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

export { APP_NAME, API_BASE_URL, firebaseConfig };