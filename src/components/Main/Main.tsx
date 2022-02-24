import React from "react";
import { checkGameOver } from "../../utilities/checkGameOver";
import DropDown from "../DropDown/DropDown";
import Result from "../Result/Result";
//css
import "./Main.css";

//types
interface Props {
	showMarker: boolean;
	gameOver: boolean;
	mouseCoord: { x: number; y: number };
	remainingTarget: {
		name: string;
		img: string;
	}[];
	handleClickedPic: (e: any) => void;
	handleCharSelection: (e: any) => void;
	handleRestartGame: () => void;
}

const Main: React.FC<Props> = ({
	showMarker,
	gameOver,
	mouseCoord,
	remainingTarget,
	handleClickedPic,
	handleCharSelection,
	handleRestartGame,
}) => {
	return (
		<div className="img-container" onClick={handleClickedPic}>
			<img
				src={require("../../images/cartoonnetwork.jpg")}
				alt="wheres-waldo-pic"
			/>
			{showMarker && (
				<DropDown
					mouseCoord={mouseCoord}
					remainingTarget={remainingTarget}
					handleCharSelection={handleCharSelection}
				/>
			)}
		</div>
	);
};

export default Main;
