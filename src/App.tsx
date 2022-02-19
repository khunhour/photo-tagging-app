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
		img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/65010c88-0c13-46f8-a9f0-9276a55e242a/dei579l-1a25f6b9-8723-401a-b816-6d97390d5b4f.png/v1/fill/w_400,h_1091,strp/benson_the_gumball_machine__regular_show__by_joneoyvilde03_dei579l-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA5MSIsInBhdGgiOiJcL2ZcLzY1MDEwYzg4LTBjMTMtNDZmOC1hOWYwLTkyNzZhNTVlMjQyYVwvZGVpNTc5bC0xYTI1ZjZiOS04NzIzLTQwMWEtYjgxNi02ZDk3MzkwZDViNGYucG5nIiwid2lkdGgiOiI8PTQwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.olM6DiN6KYaWv4WL2mlgB3I4ZDyaehLXTnSKqxwK3G4",
	},
	{
		name: "Courage",
		img: "https://www.kindpng.com/picc/m/134-1341057_courage-the-cowardly-dog-png-transparent-png.png",
	},
	{
		name: "Lazlo",
		img: "https://www.pngitem.com/pimgs/m/478-4782749_camp-lazlo-monkey-lazlo-camp-lazlo-lazlo-hd.png",
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
