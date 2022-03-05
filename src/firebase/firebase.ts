import {
	addDoc,
	collection,
	doc,
	getDoc,
	getDocs,
	orderBy,
	query,
	serverTimestamp,
	setDoc,
	Timestamp,
	updateDoc,
} from "firebase/firestore";
import { db } from "./firebase-config";
import uniqid from "uniqid";

let playerId: string = "";

const getLocation = async () => {
	const locationCollectionRef = collection(db, "target-location");
	const data = await getDocs(locationCollectionRef);
	const formattedData = data.docs.map((doc) => ({
		...doc.data(),
		id: doc.id,
	}));
	return formattedData;
};

const addNewUser = async (currentPlayer: string) => {
	playerId = uniqid();
	const playersRef = doc(db, "players", playerId);
	await setDoc(playersRef, {
		name: currentPlayer,
		id: playerId,
		startTime: Timestamp.now(),
	});
};

const addEndTime = async () => {
	const userRef = doc(db, "players", playerId);
	const userSnap = await getDoc(userRef);
	const data = userSnap.data();
	if (!data) return;
	const endTime = +Timestamp.now();
	const score = endTime - data.startTime - 2;
	await updateDoc(userRef, {
		endTime,
		score,
	});
};

const fetchAllPlayers = async () => {
	const scoreRef = collection(db, "players");
	const scoreQuery = query(scoreRef, orderBy("score"));
	const snapshot = await getDocs(scoreQuery);
	const data = snapshot.docs.map((doc) => ({
		...doc.data(),
	}));
	console.log(data);
	return data;
};

const firebase = {
	getLocation,
	addNewUser,
	addEndTime,
	fetchAllPlayers,
};

export default firebase;
