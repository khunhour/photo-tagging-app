import React, { useState } from "react";
// components
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
// helper functions
// import { handleClickedPic } from "./utilities/handleClickedPic";

const TARGET_CHARACTER: { name: string; img: string }[] = [
	{
		name: "Benson",
		img: "src/images/benson.png",
	},
	{
		name: "Courage",
		img: "src/images/courage.png",
	},
	{
		name: "Lazlo",
		img: "src/images/lazlo.png",
	},
];

function App() {
	const [showTarget, setShowTarget] = useState(false);
	const [mouseCoord, setMouseCoord] = useState({ x: 0, y: 0 });
	const [remainingTarget, setRemainingTarget] = useState(TARGET_CHARACTER);

	//handle when click on pic to show targetcircle and dropdown for selection
	const handleClickedPic = (e: React.MouseEvent) => {
		setShowTarget(!showTarget);
		setMouseCoord({
			x: e.pageX,
			y: e.pageY,
		});
	};

	return (
		<div className="App">
			<Header />
			<Main
				showTarget={showTarget}
				mouseCoord={mouseCoord}
				remainingTarget={remainingTarget}
				handleClickedPic={handleClickedPic}
			/>
			<Footer />
		</div>
	);
}

export default App;
