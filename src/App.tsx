import React, { useState } from "react";
// components
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
// helper functions
// import { handleClickedPic } from "./utilities/handleClickedPic";

function App() {
	const [showTarget, setShowTarget] = useState(false);
	const [mouseCoord, setMouseCoord] = useState({ x: 0, y: 0 });

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
				handleClickedPic={handleClickedPic}
			/>
			<Footer />
		</div>
	);
}

export default App;
