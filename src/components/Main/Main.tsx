import React from "react";
import { handleClickedPicType } from "../../type/handleClickedPicType";
import DropDown from "../DropDown/DropDown";
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
		</div>
	);
};

export default Main;
