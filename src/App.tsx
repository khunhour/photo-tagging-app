import React, { useState } from "react";
// components
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { findCoord } from "./utilities/findCoord";
// helper functions
// import { handleClickedPic } from "./utilities/handleClickedPic";
// type import
import { handleClickedPicType } from "./type/handleClickedPicType";

const TARGET_CHARACTER: { name: string; img: string }[] = [
	{
		name: "Benson",
		img: "benson.png",
	},
	{
		name: "Courage",
		img: "courage.png",
	},
	{
		name: "Lazlo",
		img: "lazlo.png",
	},
];

const App: React.FC = () => {
	const [showTarget, setShowTarget] = useState(false);
	const [mouseCoord, setMouseCoord] = useState({ x: 0, y: 0 });
	const [remainingTarget, setRemainingTarget] = useState(TARGET_CHARACTER);

	//handle when click on pic to show targetcircle and dropdown for selection
	const handleClickedPic = (e: handleClickedPicType) => {
		setShowTarget(!showTarget);
		setMouseCoord({
			x: e.pageX,
			y: e.pageY,
		});
		console.log(findCoord(e));
		console.log(e);
		console.log("x: ", e.pageX);
		console.log("y: ", e.pageY);
	};

	return (
		<div className="App">
			<Header remainingTargetNum={remainingTarget.length} />
			<Main
				showTarget={showTarget}
				mouseCoord={mouseCoord}
				remainingTarget={remainingTarget}
				handleClickedPic={handleClickedPic}
			/>
			<Footer />
		</div>
	);
};

export default App;
