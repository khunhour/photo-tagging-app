import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAg6hD3mtDkpurx6hq4ieBvG24_Sxnv3Rw",
	authDomain: "photo-tagging-app-60d03.firebaseapp.com",
	projectId: "photo-tagging-app-60d03",
	storageBucket: "photo-tagging-app-60d03.appspot.com",
	messagingSenderId: "381894415926",
	appId: "1:381894415926:web:1133153479e28f812baa97",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;
