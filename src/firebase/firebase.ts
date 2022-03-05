import {
	addDoc,
	collection,
	getDocs,
	serverTimestamp,
} from "firebase/firestore";
import { db } from "./firebase-config";

const getLocation = async () => {
	const locationCollectionRef = collection(db, "target-location");
	const data = await getDocs(locationCollectionRef);
	const formattedData = data.docs.map((doc) => ({
		...doc.data(),
		id: doc.id,
	}));
	return formattedData;
};

const addNewUser = async (currentPlayer: string, id: string) => {
	const playersRef = collection(db, "players");
	await addDoc(playersRef, {
		name: currentPlayer,
		id: id,
		startTime: serverTimestamp(),
	});
};

const firebase = {
	getLocation,
	addNewUser,
};

export default firebase;
