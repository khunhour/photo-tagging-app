import {
	collection,
	doc,
	getDoc,
	getDocs,
	orderBy,
	query,
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

const addStartTime = async () => {
	const userRef = doc(db, "players", playerId);
	const startTime = Timestamp.now();
	await updateDoc(userRef, {
		startTime,
	});
};

const addEndTime = async () => {
	const userRef = doc(db, "players", playerId);
	const userSnap = await getDoc(userRef);
	const data = userSnap.data();
	if (!data) return;
	const endTime = +Timestamp.now();
	const score = endTime - data.startTime;
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

const fetchScore = async () => {
	const userRef = doc(db, "players", playerId);
	const userSnap = await getDoc(userRef);
	const data = userSnap.data();
	if (!data) return;
	return data.score;
};

const firebase = {
	getLocation,
	addNewUser,
	addStartTime,
	addEndTime,
	fetchAllPlayers,
	fetchScore,
};

export default firebase;
