
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebase.config/firebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;
