import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

// components
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import Result from "./components/Result/Result";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import Footer from "./components/Footer/Footer";

//fire base
import {
	addDoc,
	collection,
	getDocs,
	serverTimestamp,
} from "firebase/firestore";
import { db } from "./firebase/firebase-config";

// helper functions import
import { TARGET_CHARACTER } from "./utilities/targetCharacterConstant";
import { checkCharMatch } from "./utilities/checkCharMatch";
import { findPercentageCoord } from "./utilities/findPercentageCoord";
import { checkGameOver } from "./utilities/checkGameOver";

// type imports
import { TargetLocationType } from "./type/targetLocationType";
import { MouseCoordType } from "./type/mouseCoordType";
import { LeaderboardType } from "./type/LeaderboardType";
import { CharacterType } from "./type/CharacterType";
import { sortArrayAscending } from "./utilities/sortArrayAscending";
import firebase from "./firebase/firebase";

const App: React.FC = () => {
	// state hooks
	const [count, setCount] = useState<number>(0);
	const [showMarker, setShowMarker] = useState<boolean>(false);
	const [gameStart, setGameStart] = useState<boolean>(false);
	const [gameOver, setGameOver] = useState<boolean>(false);
	const [currentPlayer, setCurrentPlayer] = useState<string>("");
	const [leaderboard, setLeaderboard] = useState<LeaderboardType>();
	const [remainingTarget, setRemainingTarget] =
		useState<CharacterType>(TARGET_CHARACTER);
	const [mouseCoord, setMouseCoord] = useState<MouseCoordType>({
		x: 0,
		y: 0,
	});
	const [targetLocation, setTargetLocation] = useState<TargetLocationType>(
		[]
	);
	const navigate = useNavigate();
	//firebase database ref
	const locationCollectionRef = collection(db, "target-location");
	const playersRef = collection(db, "players");

	//set up player profile in the back end database
	useEffect(() => {
		if (gameStart) {
			(async () => {
				firebase.addNewUser(currentPlayer);
			})();
		}
	}, [gameStart]);

	//fetch actual answers to target location
	useEffect(() => {
		(async () => {
			const data = await firebase.getLocation();
			setTargetLocation([...data]);
		})();
	}, []);

	//fetch recorder users scores to display in leaderboard
	useEffect(() => {
		(async () => {
			const data = await firebase.fetchAllPlayers();
			setLeaderboard([...data]);
		})();
	}, [gameOver]);

	//start timer/stop watch on game start on frontEnd
	useEffect(() => {
		if (gameStart) {
			var timer = setInterval(
				() => setCount((prevCount) => prevCount + 1),
				1000
			);
			return () => {
				clearInterval(timer);
			};
		}
	}, [gameStart]);

	//check if the game is over when remaining Target changes
	useEffect(() => {
		const isGameOver = checkGameOver(remainingTarget);
		if (isGameOver) {
			setGameOver(true);
			setGameStart(false);
			(async () => {
				await firebase.addEndTime();
			})();
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
		setGameStart(true);
		setGameOver(false);
		navigate("/game", { replace: true });
	};

	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCurrentPlayer(e.target.value);
	};

	const handleGameOver = (destination: string) => {
		setCount(0);
		setGameOver(false);
		setRemainingTarget(TARGET_CHARACTER);
		navigate(`/${destination}`, { replace: true });
	};

	return (
		<div className="app">
			<Header
				remainingTarget={remainingTarget}
				count={count}
				gameStart={gameStart}
				gameOver={gameOver}
			/>
			<Routes>
				<Route
					path="/"
					element={
						<Home
							handleNameChange={handleNameChange}
							handleGameStart={handleGameStart}
							currentPlayer={currentPlayer}
						/>
					}
				/>
				<Route
					path="/game"
					element={
						<>
							<Main
								showMarker={showMarker}
								gameOver={gameOver}
								mouseCoord={mouseCoord}
								remainingTarget={remainingTarget}
								handleClickedPic={handleClickedPic}
								handleCharSelection={handleCharSelection}
							/>
							{gameOver && (
								<Result handleGameOver={handleGameOver} />
							)}
						</>
					}
				/>
				<Route
					path="/leaderboard"
					element={
						<Leaderboard
							leaderboard={leaderboard}
							handleGameStart={handleGameStart}
						/>
					}
				/>
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
