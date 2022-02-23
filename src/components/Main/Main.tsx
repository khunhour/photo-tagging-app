import React from "react";
import { checkGameOver } from "../../utilities/checkGameOver";
import DropDown from "../DropDown/DropDown";
import Result from "../Result/Result";
//css
import "./Main.css";

//types
interface Props {
	showMarker: boolean;
	mouseCoord: { x: number; y: number };
	remainingTarget: {
		name: string;
		img: string;
	}[];
	handleClickedPic: (e: any) => void;
	handleCharSelection: (e: any) => void;
}

const Main: React.FC<Props> = ({
	showMarker,
	mouseCoord,
	remainingTarget,
	handleClickedPic,
	handleCharSelection,
}) => {
	const isGameOver = checkGameOver(remainingTarget);
	return (
		<div className="img-container" onClick={handleClickedPic}>
			<img
				src={require("../../images/cartoonnetwork.jpg")}
				alt="wheres-waldo-pic"
			/>
			{showMarker ? (
				<DropDown
					mouseCoord={mouseCoord}
					remainingTarget={remainingTarget}
					handleCharSelection={handleCharSelection}
				/>
			) : null}
			{isGameOver ? <Result /> : null}
		</div>
	);
};

export default Main;
