import React, { useState, useEffect } from "react";
// components
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import Footer from "./components/Footer/Footer";

//fire base
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";

// helper functions import
import { TARGET_CHARACTER } from "./utilities/targetCharacterConstant";
import { checkCharMatch } from "./utilities/checkCharMatch";
import { findPercentageCoord } from "./utilities/findPercentageCoord";

// type imports
import { TargetLocationType } from "./type/targetLocationType";
import { MouseCoordType } from "./type/mouseCoordType";
import { checkGameOver } from "./utilities/checkGameOver";
import Result from "./components/Result/Result";

const App: React.FC = () => {
	// state hooks
	const [showMarker, setShowMarker] = useState<boolean>(false);
	const [showHome, setShoeHome] = useState<boolean>(true);
	const [showLeaderboard, setShowLeaderboard] = useState<boolean>(false);
	const [currentPlayer, setCurrentPlayer] = useState<string>("");
	const [remainingTarget, setRemainingTarget] =
		useState<{ name: string; img: string }[]>(TARGET_CHARACTER);
	const [mouseCoord, setMouseCoord] = useState<MouseCoordType>({
		x: 0,
		y: 0,
	});
	const [targetLocation, setTargetLocation] = useState<TargetLocationType>(
		[]
	);

	//firebase database ref
	const locationCollectionRef = collection(db, "target-location");

	//fetch actual answers to target location
	useEffect(() => {
		const getLocation = async () => {
			const data = await getDocs(locationCollectionRef);
			const formattedData = data.docs.map((doc) => ({
				...doc.data(),
			}));
			setTargetLocation([...formattedData]);
		};
		getLocation();
	}, []);

	//check if game over
	useEffect(() => {
		if (checkGameOver(remainingTarget)) {
			setShowLeaderboard(true);
		}
	}, [remainingTarget]);

	//handle when click on pic to show targetcircle and dropdown for selection
	const handleClickedPic = (e: any) => {
		if (checkGameOver(remainingTarget)) return;
		setShowMarker(!showMarker);
		let coord = findPercentageCoord(e);
		setMouseCoord(coord);
	};

	const handleCharSelection = (id: string) => {
		//check if it match with provided char
		// if true
		let charMatched = checkCharMatch(id, mouseCoord, targetLocation);

		if (charMatched) {
			//adjust remaining char
			//display result
			setRemainingTarget(
				remainingTarget.filter((obj) => obj.name.toLowerCase() !== id)
			);
			alert("Match");
		} else {
			//display result
			alert("wrong");
		}
	};

	const handleGameStart = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setShoeHome(!showHome);
	};

	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCurrentPlayer(e.target.value);
	};

	return (
		<div className="App">
			<Header remainingTarget={remainingTarget} />
			{/* {showHome && <Home />} */}
			{/* <Home
				handleNameChange={handleNameChange}
				handleGameStart={handleGameStart}
			/> */}
			<Main
				showMarker={showMarker}
				mouseCoord={mouseCoord}
				remainingTarget={remainingTarget}
				handleClickedPic={handleClickedPic}
				handleCharSelection={handleCharSelection}
			/>
			<Result />
			{showLeaderboard && <Leaderboard />}
			<Footer />
		</div>
	);
};

export default App;
