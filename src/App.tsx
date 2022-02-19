import React, { useState } from "react";
// components
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
// helper functions
// import { handleClickedPic } from "./utilities/handleClickedPic";

function App() {
	const [showTarget, setShowTarget] = useState(false);
	const [mouseCoord, setMouseCoord] = useState([0, 0]);
	const handleClickedPic = (e: React.MouseEvent<HTMLDivElement>) => {
		setShowTarget(!showTarget);
	};
	return (
		<div className="App">
			<Header />
			<Main showTarget={showTarget} handleClickedPic={handleClickedPic} />
			<Footer />
		</div>
	);
}

export default App;
