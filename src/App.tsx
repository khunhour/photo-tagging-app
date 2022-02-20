import React, { useState, useEffect } from "react";
// components
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

//fire base
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";

// helper functions import
import { findCoord } from "./utilities/findCoord";
import { TARGET_CHARACTER } from "./utilities/targetCharacterConstant";

// type import
import { handleClickedPicType } from "./type/handleClickedPicType";
import { TargetLocation } from "./type/targetLocation";

const App: React.FC = () => {
	const [showMarker, setShowMarker] = useState(false);
	const [mouseCoord, setMouseCoord] = useState({ x: 0, y: 0 });
	const [remainingTarget, setRemainingTarget] = useState(TARGET_CHARACTER);
	const [targetLocation, setTargetLocation] = useState({});
	const locationCollectionRef = collection(db, "target-location");

	//fetch actual answers to target location
	useEffect(() => {
		const getLocation = async () => {
			const data = await getDocs(locationCollectionRef);
			const formattedData = data.docs.map((doc) => ({
				...doc.data(),
			}))[0];
			setTargetLocation(formattedData);
		};

		getLocation();
	}, []);

	//handle when click on pic to show targetcircle and dropdown for selection
	const handleClickedPic = (e: handleClickedPicType) => {
		setShowMarker(!showMarker);
		setMouseCoord({
			x: e.pageX,
			y: e.pageY,
		});
	};

	const handleCharSelection = () => {};

	return (
		<div className="App">
			<Header remainingTargetNum={remainingTarget.length} />
			<Main
				showMarker={showMarker}
				mouseCoord={mouseCoord}
				remainingTarget={remainingTarget}
				handleClickedPic={handleClickedPic}
			/>
			<Footer />
		</div>
	);
};

export default App;
